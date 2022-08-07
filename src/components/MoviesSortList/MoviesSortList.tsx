import React, {FC, useEffect, useState} from 'react';
import './MoviesSortList.scss';
import {Select} from "antd";
import {orderByType, sortOptionsType} from "../../types/movie";
import {movieApi} from "../../redux/services/movieApi";
import {changePage, changeTotalMoviesCount, setAllMovies} from "../../redux/slices/movieSlice";
import {useTypedDispatch, useTypedSelector} from "../../hooks/useRedux";

const {Option, OptGroup} = Select;
type sortOptionsText = 'Title' | 'Year' | 'Rating' | 'Likes' | 'Downloads';

interface ISortOptions {
    sort: sortOptionsType,
    text: sortOptionsText
}

const MoviesSortList: FC = () => {
    const [sortValue, setSortValue] = useState<sortOptionsText>('Year')
    const dispatch = useTypedDispatch()
    const [sortMovies, {data}] = movieApi.useSortMovieMutation()
    const {page} = useTypedSelector(state => state.movies)

    const handleChange = (value: string) => {
        // @ts-ignore
        const option: [sortOptionsType, orderByType, sortOptionsText] = value.split('/')
        sortMovies({sort: option[0], order: option[1], page})
        setSortValue(option[2])
        dispatch(changePage(1))
    };

    useEffect(() => {
        if (!data) return
        const {movies, movie_count} = data.data

        dispatch(setAllMovies(movies))
        dispatch(changeTotalMoviesCount(movie_count))
    }, [data])


    const sortOptions: ISortOptions[] = [
        {sort: 'title', text: 'Title'},
        {sort: 'year', text: 'Year'},
        {sort: 'rating', text: 'Rating'},
        {sort: 'like_count', text: 'Likes'},
        {sort: 'download_count', text: 'Downloads'},
    ]

    return (
        <Select defaultValue="Year" value={sortValue} className={'movieSortList'} onChange={handleChange}>
            <OptGroup label="Descending">
                {sortOptions.map(({sort, text}) =>
                    <Option value={`${sort}/desc`} key={`${sort}desc`}>{text}</Option>
                )}
            </OptGroup>
            <OptGroup label="Ascending">
                {sortOptions.map(({sort, text}) =>
                    <Option value={`${sort}/asc/${text}`} key={`${sort}asc`}>{text}</Option>
                )}
            </OptGroup>
        </Select>
    );
};

export default MoviesSortList;