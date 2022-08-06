import React, {FC, FormEvent, useEffect, useState} from 'react';
import style from './FilmsPage.module.scss';
import {Divider} from "antd";
import AllMovies from "../../components/AllMovies/AllMovies";
import {movieApi} from "../../redux/services/movieApi";
import {IMovie} from "../../types/movie";
import Loading from "../../components/Loading/Loading";
import SearchIcon from "../../assets/icons/SearchIcon";
import MyPagination from "../../components/MyPagination/MyPagination";

const FilmsPage: FC = () => {
    const [pageSetting, setPageSetting] = useState<{ page: number, total: number }>({
        page: 1, total: 10,
    })
    const [search, setSearch] = useState<string>('')
    const [searchMovie, {data, isLoading, isError}] = movieApi.useSearchMovieMutation()
    const [movies, setMovies] = useState<IMovie[]>([])

    const searchMovies = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        searchMovie({query: search, page: pageSetting.page})
    }

    useEffect(() => {
        searchMovie({query: search, page: pageSetting.page})
    }, [])

    useEffect(() => {
        if (!data) return

        setMovies(data.data.movies)
        setPageSetting({...pageSetting, total: data.data.movie_count})
    }, [data])

    const changePage = (currentPage: number): void => {
        setPageSetting({...pageSetting, page: currentPage})
        searchMovie({query: search, page: currentPage})
    }

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
            <br/>
            {pageSetting.total > 20 && <div className={'w-screen flex justify-center'}>
                <MyPagination total={pageSetting.total} changePage={changePage}/>
            </div>}
            <Divider/>
            <Loading isLoading={isLoading} isError={isError}>
                <AllMovies movies={movies}/>
            </Loading>
            <br/><br/>
        </div>
    );
};

export default FilmsPage;