import React, {FC, useEffect, useState} from 'react';
import './MoviesSortList.scss';
import {Dropdown, Menu, Space} from "antd";
import {DownOutlined} from '@ant-design/icons';
import {orderByType, sortOptionsType} from "../../types/movie";
import {movieApi} from "../../redux/services/movieApi";
import {
    changePage,
    changeSortValues,
    changeTotalMoviesCount,
    setAllMovies
} from "../../redux/slices/movieSlice";
import {useTypedDispatch, useTypedSelector} from "../../hooks/useRedux";

type sortOptionsText = 'Title' | 'Year' | 'Rating' | 'Likes' | 'Downloads';

interface ISortOptions {
    sort: sortOptionsType,
    text: sortOptionsText
}

const MoviesSortList: FC = () => {
    const [sortText, setSortText] = useState<sortOptionsText>('Year')
    const dispatch = useTypedDispatch()
    const [sortMovies, {data}] = movieApi.useSortMovieMutation()
    const {page} = useTypedSelector(state => state.movies)

    const handleChange = (value: string): void => {
        // @ts-ignore
        const option: [sortOptionsType, orderByType, sortOptionsText] = value.split('/')

        sortMovies({sort: option[0], orderBy: option[1], page})
        setSortText(option[2])
        dispatch(changePage(1))
        dispatch(changeSortValues({sort: option[0], orderBY: option[1]}))
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

    const menu = (
        <Menu
            items={[
                {
                    key: '1', type: 'group', label: 'Desc',
                    children: [...sortOptions.map(({sort, text}) => {
                        return {
                            key: `${sort}/desc/${text}`,
                            label: <div>{text}</div>,
                            onClick: ({key}: any) => handleChange(key)
                        }
                    })],
                },
                {
                    key: '2', type: 'group', label: 'Asc',
                    children: [...sortOptions.map(({sort, text}) => {
                        return {
                            key: `${sort}/asc/${text}`,
                            label: <div>{text}</div>,
                            onClick: ({key}: any) => handleChange(key)
                        }
                    })],
                },
            ]}
        />
    );

    return (
        <Dropdown overlay={menu} trigger={['click']}>
            <a onClick={e => e.preventDefault()}>
                <Space>
                    Sort by: <span className="dropdown-span">{sortText}</span>
                    <DownOutlined/>
                </Space>
            </a>
        </Dropdown>
    );
};

export default MoviesSortList;
