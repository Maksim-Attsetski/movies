import {IMovie, orderByType, sortOptionsType} from "../../types/movie";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IState {
    movies: IMovie[],
    bestMovies: IMovie[],
    page: number,
    total: number,
    limit: number,
    orderBy: orderByType,
    sort: sortOptionsType,
}

const initialState: IState = {
    bestMovies: [],
    movies: [],
    total: 0,
    limit: 20,
    page: 1,
    sort: 'year',
    orderBy: 'desc',
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
        changeSortValues: (state, action: PayloadAction<{ sort: sortOptionsType, orderBY: orderByType }>) => {
            state.orderBy = action.payload.orderBY
            state.sort = action.payload.sort
        },
    }
})

export default movieSlice.reducer
export const {setAllMovies, setBestMovies, changeTotalMoviesCount, changePage, changeSortValues} = movieSlice.actions