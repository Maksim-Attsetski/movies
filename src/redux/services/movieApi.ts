import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const baseUrl: string = 'https://yts.mx/api/v2/';

export const movieApi = createApi({
    reducerPath: 'movieApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    tagTypes: ['Movies', 'BestMovies', 'Film'],
    endpoints: (build) => ({
        getAllMovie: build.query<any, number>({
            query: (page: number = 1) => ({
                url: 'list_movies.json',
                params: {page, limit: 20, sort_by: 'year'},
            }),
            providesTags: result => ['Movies']
        }),
        searchMovie: build.mutation<any, { query: string, page: number }>({
            query: ({query = '', page = 1}) => ({
                url: 'list_movies.json',
                params: {query_term: query, page, sort_by: 'year'},
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
                url: 'movie_details.json/',
                params: {movie_id: id}
            }),
            providesTags: result => ['Film'],
        }),
    })
})

export const {} = movieApi