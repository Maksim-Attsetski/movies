import React, {FC, useEffect, useMemo} from 'react';
import style from './Film.module.scss';
import {useParams} from "react-router-dom";
import {movieApi} from "../../redux/services/movieApi";
import Loading from "../Loading/Loading";
import {Divider, Image} from 'antd';
import {IMovie} from "../../types/movie";
import {getFilmDuration} from "../../utils/getFilmDuration";

const Film: FC = () => {
    const {id} = useParams()
    if (!id) return <></>
    const {data, isLoading, isError} = movieApi.useGetFilmQuery(+id)

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const film: IMovie | null = useMemo(() => data ? data.data.movie : null, [data])

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        console.log(film)
    }, [data])

    return (
        <Loading isLoading={isLoading} isError={isError}>
            <div className={style.film + ' container'}>
                <Image preview={false} src={film?.medium_cover_image} className={style.film_image}/>
                <div className={style.film_content}>
                    {/*<a href={`https://youtu.be/${movie.yt_trailer_code}`} target='_blank'>youtube</a>*/}

                    {/*<iframe width="420" height="315"*/}
                    {/*        src={`https://www.youtube.com/embed/${movie.yt_trailer_code}`}>*/}
                    {/*</iframe>*/}

                    <div className={style.film_title}>{film?.title_long}</div>
                    <div>Film duration: {getFilmDuration(film?.runtime || 0)}</div>
                    <div>Rating: {film?.rating} / 10</div>

                    <br/>

                    <a href={`https://www.imdb.com/title/${film?.imdb_code}/`}
                       target='_blank'
                    >Search more on IMDB
                    </a>
                    <a href={`https://www.youtube.com/embed/${film?.yt_trailer_code}`}
                       target='_blank'
                    >Watch trailer on YouTube
                    </a>
                    <div className={'flex gap-3 flex-wrap'}>
                        {film?.genres && film?.genres.map((genre) =>
                            <div key={genre} className={style.film_genre}>{genre}</div>
                        )}
                    </div>
                </div>
                <div className={style.film_description}>
                    <div>
                        <Divider className={style.divider} />
                        <div>Description:</div>
                        <br/>
                        <div>{film?.description_full}</div>
                    </div>
                </div>
            </div>
        </Loading>
    );
};

export default Film;