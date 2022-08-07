import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {orderByType, sortOptionsType} from "../../types/movie";

const baseUrl: string = 'https://yts.mx/api/v2/';

interface IRequestParams {
    sort: sortOptionsType,
    orderBy?: orderByType,
    page: number,
    query?: string,
}

export const movieApi = createApi({
    reducerPath: 'movieApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    tagTypes: ['Movies', 'BestMovies', 'FilmDetail', 'FilmSuggestions'],
    endpoints: (build) => ({
        getAllMovie: build.query<any, number>({
            query: (page: number = 1) => ({
                url: 'list_movies.json',
                params: {page, limit: 20, sort_by: 'year'},
            }),
            providesTags: result => ['Movies']
        }),
        searchMovie: build.mutation<any, IRequestParams>({
            query: ({query = '', page = 1, orderBy = 'desc', sort = 'year'}) => ({
                url: 'list_movies.json',
                params: {query_term: query, page, sort_by: sort, order_by: orderBy},
            }),
            invalidatesTags: ['Movies'],
        }),
        sortMovie: build.mutation<any, IRequestParams>({
            query: ({sort = 'year', orderBy = 'desc', page = 1}) => ({
                url: 'list_movies.json',
                params: {sort_by: sort, order_by: orderBy, page},
            }),
            invalidatesTags: ['Movies'],
        }),
        getBestMovie: build.query<any, number>({
            query: (limit: number = 7) => ({
                url: 'list_movies.json',
                params: {limit, sort_by: 'rating'},
            }),
            providesTags: result => ['BestMovies'],
        }),
        getFilm: build.query<any, number>({
            query: (id: number) => ({
                url: 'movie_details.json',
                params: {movie_id: id}
            }),
            providesTags: result => ['FilmDetail'],
        }),
        getFilmSuggestions: build.query<any, number>({
            query: (id: number) => ({
                url: 'movie_suggestions.json',
                params: {movie_id: id}
            }),
            providesTags: result => ['FilmSuggestions'],
        }),
    })
})

export const {} = movieApi