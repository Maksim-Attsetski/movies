import React, {FC} from 'react';
import style from './AllMovies.module.scss';
import {IMovie} from "../../types/movie";
import {Image} from 'antd';
import {Link} from "react-router-dom";
import {routeName} from "../Layout/routeName";

interface IProps {
    movies: IMovie[],
}

const AllMovies: FC<IProps> = ({movies}) => {
    return (
        <div className={style.movies + ' container'}>
            {(movies && movies.length > 0) && movies.map((movie: IMovie) =>
                <div className={style.film} key={movie.id}>
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
                </div>)}
        </div>
    );
};

export default AllMovies;