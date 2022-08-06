import React, {FC} from 'react';

const TopDoubleArrow: FC = () => {
    return (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"
                fill="none" stroke="#c9083c" strokeWidth="4" strokeLinejoin="round"/>
            <path d="M31 22L24 15L17 22" stroke="#c9083c" strokeWidth="4" strokeLinecap="round"
                  strokeLinejoin="round"/>
            <path d="M31 31L24 24L17 31" stroke="#c9083c" strokeWidth="4" strokeLinecap="round"
                  strokeLinejoin="round"/>
        </svg>
    );
};

export default TopDoubleArrow;