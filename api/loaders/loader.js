import { apiService } from "../service.api";

export async function rootLoader() {
    const { movies, page, total_pages, total_results } = await apiService.getMovieList();
    return { movies, page, total_pages, total_results };
}

export async function movieLoader({ params }) {
    const movie = await apiService.getMovieById(params.id);
    return { movie };
}
