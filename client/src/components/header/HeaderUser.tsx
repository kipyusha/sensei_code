import React from 'react'
import styled from "styled-components";
import { IoIosNotifications } from 'react-icons/io';
import {AvatarUser} from '../../assets/img/avatar/index'
import { TbMessage2Code } from 'react-icons/tb';
import { useAppSelector } from '../../hooks';
import { getUserInfo } from '../../redux/ducks/userInfo/selectors';
import { NavLink } from 'react-router-dom';

const HeaderUser = () => {
  const user = useAppSelector(getUserInfo);
  return (
    <>
        <Container>
            <Span>
              <Icon><TbMessage2Code/></Icon>
              <Icon><IoIosNotifications/></Icon>
            </Span>
            <UserInfo>
              <Avatar src={AvatarUser} ></Avatar>
              <NameUser to = '/profile'>{user.userInfo.login}</NameUser>
            </UserInfo>  
            
        </Container>
    </>
  )
}

export default HeaderUser


const Container = styled.div`
position: fixed;
  width: max-content;
  height: 50px;
  right: 0;
  display: flex;
  justify-content: end;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.2);
  border-bottom-left-radius: 10px;
`;

const Span = styled.span`
    color: #fff;
    font-size: 35px;
    padding: 8px;
    
`
const Avatar = styled.img`
    width: 40px;
    height: 40px;
    margin-right: 10px;
    border: 1px solid #fff;
    border-radius: 5px;
    
   
`

const NameUser = styled(NavLink)`
  font-size: 25px;
  text-decoration: none;
  color: #fff;
  padding: 5px 10px 0 0;
  
  
`

const UserInfo = styled.div`
  display: flex;
  padding: 5px;
  cursor: pointer;
  transition: all 500ms ease;
  &:hover{
    color: rgb(197, 193, 193);
  }

`

const Icon = styled.span`
  padding: 0 10px;
  cursor: pointer;
  transition: all 500ms ease;
  &:hover{
    color: red;
    
  }
`





