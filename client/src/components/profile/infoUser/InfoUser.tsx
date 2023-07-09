import React from "react";
import styled from "styled-components";
import { AvatarUser } from "../../../assets/img/avatar";

import { IoMdSettings } from "react-icons/io";
import { NavLink } from 'react-router-dom';
import { getUserInfo } from "../../../redux/ducks/userInfo/selectors";
import { useAppSelector } from "../../../hooks";



const InfoUser = () => {
  const user = useAppSelector(getUserInfo).userInfo;
  console.log("userInfo PROFILE - ", user);
  return (
    <InfoContainer>
      <Wrapper>
        <Avatar src={AvatarUser} />
        <InfoWrapper>
          <UserName>{user.login}</UserName>
          <UserLvl>{user.rank}</UserLvl>
          <InfoUserWrapper>
            <ContainerText>
              <Text><b>Обо мне:</b> {user.about}</Text>
            </ContainerText>

            <ContainerText>
              <Text><b>Зарегистрирован с:</b> {user.date_of_register}</Text>
              <Text><b>Последнее посещение:</b> {user.last_seen}</Text>
            </ContainerText>

            <ContainerText>
              <Text><b>Подписчики:</b> {user.subscribers_count}</Text>
              <Text><b>Подписки:</b> {user.subscriptions_count}</Text>
            </ContainerText>
          </InfoUserWrapper>
        </InfoWrapper>
        <Icon to='/settings'>
          <IoMdSettings />
        </Icon>
      </Wrapper>
    </InfoContainer>
  );
};

export default InfoUser;

const InfoContainer = styled.div`
  width: 100%;
  height: 150px;
  border-radius: 15px;
  padding: 20px;

  background: rgba(0, 0, 0, 0.4);
`;

const Avatar = styled.img`
  width: 100px;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  gap: 1rem;
`;

const UserName = styled.span`
  height: max-content;
  padding: 5px 10px;
  margin-right: 2px;
  font-size: 20px;
`;

const UserLvl = styled.span`
  height: max-content;
  padding: 5px 10px;
  border-radius: 5px;
  font-weight: 600;
  font-size: 20px;
  color: rgb(247, 243, 16);
  background: #292a2c;
`;

const InfoWrapper = styled.div`
  padding-top: 10px;
`;
const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
`;
const InfoUserWrapper = styled.div`
  display: grid;
  grid-template-columns: 220px 280px 280px;
  gap: 20px;
  margin-top: 10px;
`;

const Text = styled.span`
  color: rgba(255, 255, 255, 0.63);
  font-size: 16px;
  font-weight: 200;
  white-space: wrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Icon = styled(NavLink)`
  position: absolute;
  top: 0;
  right: 0;
  text-decoration: none;
  color: #fff;
  height: max-content;
  font-size: 30px;
  
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    transform: scale(1.1);
    color: rgba(255, 255, 255, 0.6);
  }
`;

