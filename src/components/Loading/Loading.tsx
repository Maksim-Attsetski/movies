import React, {FC, ReactNode} from 'react';
import MySpinner from "../MySpinner/MySpinner";

interface IProps {
    isLoading: boolean,
    isError: boolean,
    children: ReactNode,
}

const Loading: FC<IProps> = ({children, isLoading, isError}) => {

    if (isLoading) return <div className='container'><MySpinner/></div>
    if (isError) return <div className='container'><mark>ERROR</mark></div>

    return <>{children}</>
};

export default Loading;