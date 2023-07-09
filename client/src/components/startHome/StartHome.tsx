import React from 'react';
import styled from 'styled-components';
import { BackgroundStart } from '../../assets/img/backgrounds/index';
import Header from './header/Header';

const StartHome = () => {
    return (
        <>
            <Container>
                <Header/>
                <Span>Страница без авторизации</Span>
            </Container>
        </>
    );
};

export default StartHome;

const Container = styled.div`
    display: flex;
    justify-content: center;
    background: url(${BackgroundStart});
    width: 100%;
    height: 100vh;
`;

const Span =styled.span`
  height: max-content;
  font-size: 30px;
  margin-top: 500px;
  background: #000;
  padding: 10px 20px;
  border-radius: 10px;
`