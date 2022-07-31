import {combineReducers, configureStore} from "@reduxjs/toolkit";
import themeSlice from "./slices/themeSlice";
import movieSlice from "./slices/movieSlice";
import {movieApi} from "./services/movieApi";

export const rootReducer = combineReducers({
    theme: themeSlice,
    movies: movieSlice,
    [movieApi.reducerPath]: movieApi.reducer,
})


export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            movieApi.middleware,
        )
})

export type typeReducer = ReturnType<typeof rootReducer>
export type typeStore = typeof store
export type typeDispatch = typeStore['dispatch']
