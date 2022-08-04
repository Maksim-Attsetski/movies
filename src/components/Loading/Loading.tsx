import React, {FC, ReactNode} from 'react';

interface IProps {
    isLoading: boolean,
    isError: boolean,
    children: ReactNode,
}

const Loading: FC<IProps> = ({children, isLoading, isError}) => {

    if (isLoading) return <div className='container'>LOADING...</div>
    if (isError) return <div className='container'><mark>ERROR</mark></div>

    return <>{children}</>
};

export default Loading;