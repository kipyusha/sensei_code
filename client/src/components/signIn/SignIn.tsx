import React from 'react';
import styled from 'styled-components';
import SignInForm from './signInForm/SingInForm';
import { BackgroundStart } from '../../assets/img/backgrounds/index';
import { useParams } from 'react-router-dom';
import SignUpForm from './signUpForm/SignUpForm';



const SignIn = () => {
    const { operation } = useParams();

    return (
        <>
            <Wrapper>
                <Container>
                    <Content>
                        <Title>{operation === '1' ? 'Авторизация' : 'Регистрация'}</Title>
                        <Logo>
                            <img src="" alt="" />
                        </Logo>
                        {operation === '1' ? <SignInForm /> : <SignUpForm />}
                    </Content>
                </Container>
            </Wrapper>
        </>
    );
};

export default SignIn;

const Container = styled.div`
    width: fit-content;
    border-radius: 40px;
    margin: 0 auto;
    padding: 20px 100px;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 3;

    font-family: sans-serif;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.h1`
    margin: 20px 0;
    text-align: center;
    font-size: 32px;
    color: #fff;
`;

const Logo = styled.div`
    width: 250px;
    height: 125px;
    margin-bottom: 80px;
`;

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    background: url(${BackgroundStart});
    padding: 100px 0;
`;
