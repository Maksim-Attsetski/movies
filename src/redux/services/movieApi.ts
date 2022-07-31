import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const baseUrl: string = 'https://yts.mx/api/v2/';

export const movieApi = createApi({
    reducerPath: 'movieApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (build) => ({
        getAllMovie: build.query<any, number>({
            query: (page: number = 1) => ({
                url: 'list_movies.json',
                params: {limit: 20, page},
            }),
        }),
        getBestMovie: build.query<any, number>({
            query: (limit: number = 7) => ({
                url: 'list_movies.json',
                params: {limit, sort_by: 'rating'},
            }),
        }),
    })
})

export const {} = movieApi