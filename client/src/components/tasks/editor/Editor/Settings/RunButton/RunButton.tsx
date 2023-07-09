import React from 'react';
import styled from 'styled-components';
import { polygon } from '../../../../../../assets/img/svgIcons';

interface Props {
    handleSubmit: () => void;
}

const RunButton = ({handleSubmit}:Props) => {
    return (
        <Button onClick={()=>handleSubmit()}>
            <img src={polygon} alt="" />
            <span>Start</span>
        </Button>
    );
};

export default RunButton;

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100px;
    padding: 0 10px;
    margin: 0 auto;
    height: 45px;
    border: 1px solid #fff;
    border-radius: 5px;
    background: none;
    color: #fff;
    font-size: 16px;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 0 5px #ffffff77;
    }

    &:active {
        transform: scale(1);
        box-shadow: none;
    }

    &:focus {
        outline: none;
    }
`;
