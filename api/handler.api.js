import { createClient } from "@supabase/supabase-js";
import { DEFAULT_SORT_BY, DISCOVER_MOVIES_URL, GENRE_ANIMATION_ID, KEYWORD_STOPMOTION_ID, LANGUAGE_PT_BR, MOVIE_DETAILS_URL, MOVIE_SEARCH_URL, NEW_TOKEN_URL } from "../utils/constants";
import api from "./api"
import Constants from 'expo-constants';

class ApiHandler {
    #axiosInstance;
    #supabase

    constructor(axiosInstance) {
        this.#axiosInstance = axiosInstance
        this.#supabase = createClient(Constants.expoConfig.extra.SUPABASE_URL, Constants.expoConfig.extra.SUPABASE_ANON_KEY)
    }

    getDiscoverMovies = async (sortBy = DEFAULT_SORT_BY, page) => {
        try {
            const config = {
                params: {
                    with_keywords: KEYWORD_STOPMOTION_ID,
                    with_genres: GENRE_ANIMATION_ID,
                    language: LANGUAGE_PT_BR,
                    sort_by: sortBy,
                    page
                }
            }

            const response = await this.#axiosInstance.get(DISCOVER_MOVIES_URL, config)
            return response.data

        } catch (e) {
            console.error(e)
            throw e;
        }
    }

    getMovieDetailsById = async (id) => {
        try {
            const config = {
                params: {
                    append_to_response: 'videos,keywords,images,similar,reviews',
                    language: LANGUAGE_PT_BR,
                    include_image_language: 'en'
                }
            }

            const response = await this.#axiosInstance.get(`${MOVIE_DETAILS_URL}/${id}`, config)
            return response.data

        } catch (e) {
            console.error(e)
            throw e;
        }
    }

    searchMovie = async (options) => {
        try {
            const config = {
                params: {
                    language: LANGUAGE_PT_BR,
                    query: options.query,
                    page: options.page,
                    sort_by: options.sortBy
                }
            }

            const response = await this.#axiosInstance.get(`${MOVIE_SEARCH_URL}`, config)
            return response.data

        } catch (e) {
            console.error(e)
            throw e;
        }
    }

    login = async ({ email, password }) => {
        try {

            const response = await this.#supabase.auth.signInWithPassword({ email, password })
            return response

        } catch (e) {
            console.error(e)
            throw e;
        }
    }
s
    register = async ({ email, password }) => {
        try {

            const response = await this.#supabase.auth.signUp({ email, password })
            return response.data

        } catch (e) {
            console.error(e)
            throw e;
        }
    }

}

const apiHandler = new ApiHandler(api)

export { apiHandler, ApiHandler };
