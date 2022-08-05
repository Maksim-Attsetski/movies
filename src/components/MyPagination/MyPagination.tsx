import React, {FC} from 'react';
import './MyPagination.scss';
import {Pagination} from "antd";

interface IProps {
    total: number,
    changePage: (arg: number) => void
}

const MyPagination: FC<IProps> = ({total, changePage}) => {
    return (
        <Pagination
            total={total} pageSize={20}
            showSizeChanger={false}
            onChange={(page: number) => changePage(page)}
        />
    );
};

export default MyPagination;