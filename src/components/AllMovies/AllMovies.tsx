import React, {FC} from 'react';
import style from './AllMovies.module.scss';
import {IMovie} from "../../types/movie";
import {AnimatePresence} from "framer-motion";
import {useTypedSelector} from "../../hooks/useRedux";
import AllMoviesItem from "../AllMoviesItem/AllMoviesItem";

const AllMovies: FC = () => {
    const {movies} = useTypedSelector(state => state.movies)

    return (
        <div className={style.movies + ' container'}>
            <AnimatePresence>
                {movies && movies.map((movie: IMovie) => <AllMoviesItem movie={movie} key={movie.id}/>)}
                {(movies && movies.length === 0) && <div>No matches</div>}
            </AnimatePresence>
        </div>
    );
};

export default AllMovies;