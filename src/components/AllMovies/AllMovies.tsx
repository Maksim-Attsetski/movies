import React, {FC, useMemo} from 'react';
import style from './AllMovies.module.scss';
import {IMovie} from "../../types/movie";
import {Image, Typography} from "antd";
import {movieApi} from "../../redux/services/movieApi";

const AllMovies: FC = () => {
    const {data, isLoading, isError} = movieApi.useGetAllMovieQuery(15)

    const allMovie: IMovie[] = useMemo(() => !data ? [] : data.data.movies, [data])

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error</div>

    return (
        <div className={style.movies + ' container'}>
            {allMovie && allMovie.map((movie: IMovie) =>
                <div key={movie.id}>
                    <Typography.Title level={5}>{movie.title_long}</Typography.Title>
                    <Image preview={false} src={movie.medium_cover_image}/>
                </div>)}
        </div>
    );
};

export default AllMovies;