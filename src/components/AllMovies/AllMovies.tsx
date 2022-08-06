import React, {FC, useEffect} from 'react';
import style from './AllMovies.module.scss';
import {IMovie} from "../../types/movie";
import {Image} from 'antd';
import {Link} from "react-router-dom";
import {routeName} from "../Layout/routeName";
import {fadeAnim} from "../../animations/fade-anim";
import {AnimatePresence, motion} from "framer-motion";
import {useTypedSelector} from "../../hooks/useRedux";


const AllMovies: FC = () => {
    const {movies} = useTypedSelector(state => state.movies)

    return (
        <div className={style.movies + ' container'}>
            <AnimatePresence>
                {movies && movies.map((movie: IMovie) =>
                    <motion.div className={style.film} {...fadeAnim} key={movie.id}>
                        <Image preview={false} src={movie.medium_cover_image} alt={'Film poster'}/>
                        <div className={style.film_rate}>
                            {movie.rating.toFixed(1)}
                        </div>

                        <div className={style.film_title}>
                            <span>{movie.title}</span>
                            {movie.rating >= 2
                                ? <Link to={routeName.FILMS + movie.id}>Watch</Link>
                                : <div className={'text-end pl-3'}>not released</div>
                            }
                        </div>
                    </motion.div>)}
                {(movies && movies.length === 0) && <div>No matches</div>}
            </AnimatePresence>
        </div>
    );
};

export default AllMovies;