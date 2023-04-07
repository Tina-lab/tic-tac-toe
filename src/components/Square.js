import React from 'react';

const style = {
    background: 'yellow',
    border: '2px solid lightblue',
    fontSize: '30px',
    fontWeight: '500',
    cursor: 'pointer',
    outline: 'none',
}

const Square = ({value, onClick}) => (
    <button style = {style} onClick={onClick}>
        {value}
    </button>
);

export default Square;