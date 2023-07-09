import React from 'react';
import styled from 'styled-components';
import { cmd } from '../../../../assets/img/svgIcons';

interface Props {
    isRight: boolean,
    isStart: boolean
}

const Output = ({isRight, isStart}: Props) => {
    return (
        <OutputWrapper>
            <TitleContainer>
                <img src={cmd} alt="" />
                <Title>Output</Title>
            </TitleContainer>
            {isStart && (isRight ? "КОМПИЛЯЦИЯ ПРОШЛА УСПЕШНО" : "ОШИБКА")}
        </OutputWrapper>
    );
};

export default Output;

const OutputWrapper = styled.section`
    width: 950px;
    height: 360px;
    background: #000;
    border-radius: 10px;
    overflow: hidden;
`;

const Title = styled.h3`
    font-size: 14px;
    color: #fff;
    font-family: sans-serif;
    margin: 0 10px;
`;

const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 30px;
    background: #202020;
    padding: 0 10px;

    & img {
      width: 22px;
      height: 20px;
    }
`;
