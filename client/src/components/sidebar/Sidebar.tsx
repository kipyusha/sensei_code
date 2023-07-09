import React from 'react'
import styled from "styled-components";
import { ImHome } from 'react-icons/im';
import { BiDesktop } from 'react-icons/bi';
import { VscBook } from 'react-icons/vsc';
import { FaCircle } from 'react-icons/fa';
import { LogoSensei } from "../../assets/img/svgIcons/index";
import { NavLink } from 'react-router-dom';
const Sidebar = () => {
  return (
    <>
    <Container>
        <SpanLink to='/'>
            <ImHome/>
            <ContainerText width='100px'>Главная</ContainerText>
        </SpanLink>
        <Practice>
            <Circle><FaCircle/></Circle>
            <SpanLink to='/pract'>
                <BiDesktop/>
                <ContainerText width='240px'>Начни свою практику</ContainerText>
            </SpanLink>
        </Practice>
        
        <Circle><FaCircle/></Circle>
        <SpanLink to='/document'>
            <VscBook/>
            <ContainerText width='170px'>Документация</ContainerText>
        </SpanLink>
        <Logo src={LogoSensei} />
    </Container>
    </>
  )
}

export default Sidebar



const Container = styled.div`
position: fixed;
display: block;
justify-content: center;
    width: 55px;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    font-size: 35px;
    
    padding: 20px 5px;
`

const Practice = styled.div`
    padding: 30px 0;
`

const Circle = styled.div`
width: 10px;
height: 10px;
    font-size: 10px;
    color: #333;
    margin: 0 auto;
    text-align: center;
    padding: 15px 0;
    margin-bottom: 10px;
`

const ContainerText = styled.div<{ width: string }>`

    font-size: 20px;
    width: ${props => props.width};
    height: 50px;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 10px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    display: none;
    transition: display 500ms ease;
`

const SpanLink = styled(NavLink)`
    display: grid;
    color: #fff;
    text-decoration: none;
    grid-template-columns: 45px 250px ;
    height: 30px;
    padding: 5px;
    cursor: pointer;
    transition: all 500ms ease;
    &:hover {
        color: #4891b8;
    }
    &:hover ${ContainerText}{
        display: block;
        color: #fff;
        
    }
`

const Logo = styled.img`
    position: absolute;
    cursor: pointer;
    transform: rotate(-90deg);
    width: 200px;
    bottom: 80px;
    left: -70px;
`