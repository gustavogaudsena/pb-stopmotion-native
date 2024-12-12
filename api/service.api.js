import { GENRE_ANIMATION_ID, IMAGES_BASE_URL, SORT_TYPES_MAP } from "../utils/constants";
import { ApiHandler, apiHandler } from "./handler.api";
import AsyncStorage from '@react-native-async-storage/async-storage';

class ApiService {
    /**
     * @type {ApiHandler} #apiHandler
     * */
    #apiHandler;

    constructor(apiHandler) {
        this.#apiHandler = apiHandler
    }

    getMovieList = async (options = { sortBy: SORT_TYPES_MAP.default.value, page: 1, orderBy: 'desc' }) => {
        try {
            const sortBy = `${options.sortBy}.${options.orderBy}`
            const data = await this.#apiHandler.getDiscoverMovies(sortBy, options.page)
            const { results, total_pages, total_results, page } = data
            const movies = results.map((movie) => {
                return {
                    id: movie.id,
                    title: movie.title,
                    originalTitle: movie.original_title,
                    overview: movie.overview,
                    release_date: movie.release_date,
                    popularity: movie.popularity,
                    stars: movie.vote_average,
                    imagens: {
                        principal: {
                            src: `${IMAGES_BASE_URL}/original/${movie.poster_path ?? movie.backdrop_path}`
                        }
                    }
                }
            })
            return { movies, total_pages, total_results, page };
        } catch (e) {
            console.error(e)
        }
    }

    getMovieById = async (id) => {
        try {
            const data = await this.#apiHandler.getMovieDetailsById(id)
            const movie = {
                id: data.id,
                title: data.title,
                originalTitle: data.original_title,
                overview: data.overview,
                release_date: data.release_date,
                popularity: data.popularity,
                stars: data.vote_average,
                genres: data.genres,
                production_companies: data.production_companies.filter(company => company.logo_path && company.name),
                videos: data.videos,
                imagens: {
                    principal: {
                        src: `${IMAGES_BASE_URL}/original/${data.poster_path ?? data.backdrop_path}`
                    }
                }
            }
            return movie;
        } catch (e) {
            console.error(e)
        }
    }

    searchMovie = async (options = { sortBy: undefined, page: 1, orderBy: 'desc', query: '' }) => {
        try {
            const sortBy = `${options.sortBy}.${options.orderBy}`
            const data = await this.#apiHandler.searchMovie({ query: options.query, page: options.page, sortBy })
            const { results, total_pages, total_results, page } = data
            const movies = results.filter((movie) => movie.genre_ids.includes(GENRE_ANIMATION_ID)).map((movie) => {
                return {
                    id: movie.id,
                    title: movie.title,
                    originalTitle: movie.original_title,
                    overview: movie.overview,
                    release_date: movie.release_date,
                    popularity: movie.popularity,
                    stars: movie.vote_average,
                    imagens: {
                        principal: {
                            src: `${IMAGES_BASE_URL}/original/${movie.poster_path ?? movie.backdrop_path}`
                        }
                    }
                }
            })
            return { movies, total_pages, total_results, page };
        } catch (e) {
            console.error(e)
        }
    }

    login = async ({ email, password }) => {
        try {
            const { data, error } = await this.#apiHandler.login({ email, password })
            if (data.user && data.session) {
                await AsyncStorage.setItem('session', JSON.stringify(data.session));
                await AsyncStorage.setItem('user', JSON.stringify(data.user));
            }
            return { data, error };
        } catch (e) {
            console.error(e)
        }
    }

    register = async ({ email, password }) => {
        try {
            const data = await this.#apiHandler.register({ email, password })
            return data;
        } catch (e) {
            console.error(e)
        }
    }

    getSession = async () => {
        try {
            const session = await AsyncStorage.getItem('session');
            const user = await AsyncStorage.getItem('user');

            return {
                session: JSON.parse(session),
                user: JSON.parse(user),
            };
        } catch (e) {
            console.error(e)
        }
    }

    logout = async () => {
        try {
            await AsyncStorage.removeItem('session');
            await AsyncStorage.removeItem('user');

            return true;
        } catch (e) {
            console.error(e)
        }
    }
}


const apiService = new ApiService(apiHandler)

export { apiService, ApiService };
