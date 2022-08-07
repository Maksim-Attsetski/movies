import React, {FC, ReactNode} from 'react';
import MySpinner from "../MySpinner/MySpinner";

interface IProps {
    isLoading: boolean,
    isError: boolean,
    children: ReactNode,
    className?: string | undefined,
}

const Loading: FC<IProps> = ({children, className, isLoading, isError}) => {

    if (isLoading) return <div className='container'><MySpinner/></div>
    if (isError) return <div className='container'>
        <mark>ERROR</mark>
    </div>

    return className ? <div className={className}>{children}</div> : <>{children}</>
};

export default Loading;