import {IMovie} from "../../types/movie";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IState {
    movies: IMovie[],
    bestMovies: IMovie[],
    page: number,
    total: number,
    limit: number
}

const initialState: IState = {
    bestMovies: [],
    movies: [],
    total: 0,
    limit: 20,
    page: 1,
}

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        setAllMovies: (state, action: PayloadAction<IMovie[]>) => {
            state.movies = action.payload
        },
        setBestMovies: (state, action: PayloadAction<IMovie[]>) => {
            state.bestMovies = action.payload
        },
        changePage: (state, action: PayloadAction<number>) => {
            state.page = action.payload
        },
        changeTotalMoviesCount: (state, action: PayloadAction<number>) => {
            state.total = action.payload
        },
    }
})

export default movieSlice.reducer
export const {setAllMovies, setBestMovies, changeTotalMoviesCount, changePage} = movieSlice.actions