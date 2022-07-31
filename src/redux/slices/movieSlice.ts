import {IMovie} from "../../types/movie";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IState {
    movies: IMovie[],
    bestMovies: IMovie[],
}

const initialState: IState = {
    bestMovies: [],
    movies: [],
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
    }
})

export default movieSlice.reducer
export const {setAllMovies, setBestMovies} = movieSlice.actions