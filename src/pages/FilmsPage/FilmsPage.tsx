import React, {FC, FormEvent, useEffect, useMemo, useState} from 'react';
import style from './FilmsPage.module.scss';
import {Divider} from "antd";
import AllMovies from "../../components/AllMovies/AllMovies";
import {movieApi} from "../../redux/services/movieApi";
import {IMovie} from "../../types/movie";
import Loading from "../../components/Loading/Loading";
import SearchIcon from "../../assets/icons/SearchIcon";
import BestMovies from "../../components/BestMovies/BestMovies";

const FilmsPage: FC = () => {
    const [page, setPage] = useState<number>(1)
    const [search, setSearch] = useState<string>('')
    const [searchMovie, {data, isLoading, isError}] = movieApi.useSearchMovieMutation()

    const searchMovies = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        searchMovie({query: search, page})
    }

    useEffect(() => {
        searchMovie({query: search, page})
    }, [])

    const movies: IMovie[] = useMemo(() => data ? data.data.movies : [], [data])

    if (isError) return <div>Error</div>

    return (
        <div className={style.filmsPage}>
            <br/>
            <form onSubmit={searchMovies} className='container'>
                <label className={style.filmSearch}>
                    <input
                        type="text" value={search} placeholder={'Search...'}
                        onChange={(event) => setSearch(event.target.value)}
                    />
                    <div className={style.filmSearchIcon}>
                        <SearchIcon/>
                    </div>
                </label>
            </form>
            <Divider/>
            <Loading isLoading={isLoading} isError={isError}>
                <AllMovies movies={movies}/>
            </Loading>
        </div>
    );
};

export default FilmsPage;