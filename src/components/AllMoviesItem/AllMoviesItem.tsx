import React, {FC} from 'react';
import style from './AllMoviesItem.module.scss';
import {fadeAnim} from "../../animations/fade-anim";
import {Image} from "antd";
import {Link} from "react-router-dom";
import {routeName} from "../Layout/routeName";
import {motion} from "framer-motion";
import {IMovie} from "../../types/movie";

interface IProps {
    movie: IMovie
}

const AllMoviesItem: FC<IProps> = ({movie}) => {
    return (
        <motion.div className={style.film} {...fadeAnim} key={movie.id}>
            <Image preview={false} src={movie.medium_cover_image} alt={'FilmDetail poster'}/>
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
        </motion.div>
    );
};

export default AllMoviesItem;