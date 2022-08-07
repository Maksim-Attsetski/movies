import React, {FC, useEffect, useMemo} from 'react';
import style from './FilmDetail.module.scss';
import {useParams} from "react-router-dom";
import {movieApi} from "../../redux/services/movieApi";
import Loading from "../UI/Loading/Loading";
import {Divider, Image} from 'antd';
import {IMovie} from "../../types/movie";
import {getFilmDuration} from "../../utils/getFilmDuration";
import {motion} from "framer-motion";
import {filmContainerAnim} from "../../animations/film-container-anim";
import {filmItemAnim} from "../../animations/film-item-anim";
import AllMoviesItem from "../AllMoviesItem/AllMoviesItem";
import MyTitle from "../UI/MyTitle/MyTitle";

const FilmDetail: FC = () => {
    const {id} = useParams()
    if (!id) return <></>
    const {data, isLoading, isError} = movieApi.useGetFilmQuery(+id)
    const {
        data: dataSuggestions,
        isLoading: loading,
        isError: error
    } = movieApi.useGetFilmSuggestionsQuery(+id)

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const film: IMovie | null = useMemo(() => data ? data.data.movie : null, [data])
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const suggestions: IMovie[] = useMemo(() => dataSuggestions ? dataSuggestions.data.movies : [], [dataSuggestions])

    return (
        <Loading isLoading={isLoading} isError={isError}>
            <div className={style.film + ' container'}>
                <Image preview={false} src={film?.medium_cover_image} className={style.film_image}/>
                <div className={style.film_content}>
                    <MyTitle className={style.film_title} text={film ? film.title_long : ''}/>

                    <div>Film duration: {getFilmDuration(film?.runtime || 0)}</div>
                    <div>Rating: {film?.rating} / 10</div>
                    <div>MPA rating: {film?.mpa_rating}</div>
                    <div>Likes: {film?.like_count}</div>

                    <br/>

                    <a href={`https://www.imdb.com/title/${film?.imdb_code}/`}
                       target='_blank'
                    >Search more on IMDB
                    </a>
                    <a href={`https://www.youtube.com/embed/${film?.yt_trailer_code}`}
                       target='_blank'
                    >Watch trailer on YouTube
                    </a>
                    <motion.ul className={'flex gap-3 flex-wrap sm:justify-end'}
                               variants={filmContainerAnim} initial={'initial'} animate={'animate'}>
                        {film?.genres.map((genre) => (
                            <motion.li variants={filmItemAnim} key={genre} className={style.film_genre}>
                                {genre}
                            </motion.li>))}
                    </motion.ul>

                    <div>
                        <br/>
                        <div className={'text-center sm:text-end text-xl mb-2'}>Torrents</div>
                        <motion.ul className={style.film_torrents}
                                   variants={filmContainerAnim} initial={'initial'} animate={'animate'}>
                            {film?.torrents.map((torrent) =>
                                <motion.a
                                    variants={filmItemAnim} key={torrent.hash} className={style.film_genre}
                                    title={torrent.size} href={torrent.url}>
                                    {torrent.quality}
                                </motion.a>
                            )}
                        </motion.ul>
                    </div>
                </div>
                <div className={style.film_description}>
                    <div>
                        <Divider className={style.divider}/>
                        <div>Description:</div>
                        <br/>
                        <div>{film?.description_full}</div>
                    </div>
                </div>
                <br/><br/>

                <Loading isLoading={loading} isError={error} className={style.film_suggestions}>
                    <Divider className={style.divider}/>
                    <div>Recommended for you:</div>
                    <br/>
                    <div className={style.film_suggestions_films}>
                        {suggestions?.length > 0
                            ? suggestions.map((suggestion: IMovie) =>
                                <AllMoviesItem movie={suggestion} key={suggestion.id}/>)
                            : <div>No suggestions for this film :(</div>}
                    </div>
                </Loading>
            </div>
        </Loading>
    );
};

export default FilmDetail;