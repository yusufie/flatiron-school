import React from 'react';

const GetColor = ({ colors }) => {
    return (
        colors.map((color) => {
            return <li key={color} style={{ color: color }} >{color}</li>
        })
    )
};

export default GetColor;