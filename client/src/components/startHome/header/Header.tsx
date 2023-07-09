import React from "react";
import styled from "styled-components";
import { LogoSensei } from "../../../assets/img/svgIcons/index";
import { NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <>
      <Container className="Header">
        <HeaderLeft>
          <Logo src={LogoSensei} />

          <NavLink1 href="*">Ссылка 1</NavLink1>
          <NavLink1 href="*">Ссылка 2</NavLink1>
          <NavLink1 href="*">Ссылка 3</NavLink1>
        </HeaderLeft>
        <HeaderAuthorization>
          <NavLinkSign to='/login/1'>Вход</NavLinkSign>
          <NavLinkRegistration to='/login/2'>Регистрация</NavLinkRegistration>
        </HeaderAuthorization>
      </Container>
    </>
  );
};

export default Header;

const Container = styled.div`
position: fixed;
  width: 100%;
  height: 75px;
  background: transparent;
  display: flex;
  justify-content: space-between;
  color: #fff;
`;

const HeaderLeft = styled.div`
  display: flex;
  font-size: 25px;
`;

const HeaderAuthorization = styled.div`
  font-size: 28px;
  margin-top: 20px;
  margin-right: 80px;
  
`;

const NavLink1 = styled.a`
  margin: 0 30px;
  font-weight: 400;
  margin-top: 30px;
  cursor: pointer;
  text-decoration: none;
  color: #a2a2a4;
  &:hover {
    
    color: #f1f1f3;
}
`;

const NavLinkSign = styled(NavLink)`
  margin: 0 20px;
  font-weight: 600;
  letter-spacing: 3px;
  border-bottom: 2px solid #DF4D4D;
  cursor: pointer;
  text-decoration: none;
  color: #fff;
  text-shadow: 0 4px 5px #000;
  box-shadow: 0 10px 4px rgba(0,0,0,0.25);
  transition: border-bottom, color 500ms ease;
  &:hover {

    border-bottom: 2px solid #fff;
    color: #4ABE40;
  }
`;

const NavLinkRegistration = styled(NavLink)`
  text-decoration: none;
  letter-spacing: 3px;
  font-weight: 600;
  margin: 0 20px;
  border-bottom: 2px solid #DF4D4D;
  cursor: pointer;
  color: #fff;
  text-shadow: 0 4px 5px #000;
  box-shadow: 0 10px 4px rgba(0,0,0,0.25);
  transition: border-bottom, color 500ms ease;
  &:hover {

    border-bottom: 2px solid #fff;
    color: #4ABE40;
  }
`;

const Logo = styled.img`
  display: block;
 
  padding-top: 10px;
  width: 200px;
  height: 100px;
  margin-left: 30px;
  margin-right: 200px;
  transition: transform 500ms ease;
  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`;
