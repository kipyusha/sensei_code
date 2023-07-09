import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AiOutlineUser } from "react-icons/ai";
import { SlPhone } from "react-icons/sl";
import { MdAlternateEmail } from "react-icons/md";
import { TfiLock } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { fetchRegister } from "../../../redux/ducks/userInfo/asyncThunk";
import { getUserInfo } from "../../../redux/ducks/userInfo/selectors";

const CardBack = () => {

  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const dispatch = useAppDispatch();
  const isAuthorize = useAppSelector(getUserInfo).userInfo.isAuthorize;

  const handleSubmit = () => {
    if (login && password && email)
    dispatch(fetchRegister({email, login, password}))
  }

  const navigate = useNavigate();
    useEffect(() => {
      isAuthorize && navigate('/');
    }, [navigate, isAuthorize]);

  return (
    <CardBackContainer>
      <CenterWrap>
        <Section>
          <Title>Sign Up</Title>
          <FormGroup>
            <Input type="text" placeholder="Login" value={login} onChange={(e)=>setLogin(e.target.value)} />
            <Icon><AiOutlineUser/></Icon>
          </FormGroup>
          <FormGroup>
            <Input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <Icon><MdAlternateEmail/></Icon>
          </FormGroup>
          <FormGroup>
            <Input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            <Icon><TfiLock/></Icon>
          </FormGroup>
          <SubmitButton onClick={(e)=>{
            e.preventDefault();
            handleSubmit();
          }}>Register</SubmitButton>
        </Section>
      </CenterWrap>
    </CardBackContainer>
  );
};

export default CardBack;

const Section = styled.form`
  position: relative;
  width: fit-content;
  display: block;
  margin: 0 auto;
`;

const CardBackContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #2b2e38;
  position: absolute;
  border-radius: 6px;
  -webkit-transform-style: preserve-3d;
  transform: rotateY(180deg);
`;

const Title = styled.h4`
  font-weight: 600;
  margin-bottom: 10px;
  color: #ffeba7;
`;
const CenterWrap = styled.div`
  position: absolute;
  width: 100%;
  padding: 0 35px;
  top: 50%;
  left: 0;
  transform: translate3d(0, -50%, 35px) perspective(100px);
  z-index: 20;
  display: block;
`;

const FormGroup = styled.div`
  position: relative;
  display: block;
  margin: 0;
  padding: 0;
`;

const Input = styled.input`
margin-bottom: 10px;
  padding: 13px 20px;
  padding-left: 55px;
  height: 48px;
  width: 100%;
  font-weight: 500;
  border-radius: 4px;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.5px;
  outline: none;
  color: #c4c3ca;
  background-color: #1f2029;
  border: none;
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
  box-shadow: 0 4px 8px 0 rgba(21, 21, 21, 0.2);
  &:focus,
  &:active {
    border: none;
    outline: none;
    box-shadow: 0 4px 8px 0 rgba(21, 21, 21, 0.2);
  }
  &:-webkit-autofill, &:-webkit-autofill:hover, &:-webkit-autofill:focus, &:-webkit-autofill:active{
    box-shadow: 0 0 0 30px #1f2029 inset !important;
    -webkit-text-fill-color: #c4c3ca;
  }
`;

const SubmitButton = styled.button`
  border-radius: 4px;
  height: 44px;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
  padding: 0 30px;
  letter-spacing: 1px;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  align-items: center;
  background-color: #ffeba7;
  color: #000000;

  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #000000;
    color: #ffeba7;
    box-shadow: 0 8px 24px 0 rgba(16, 39, 112, 0.2);
  }

  &:focus {
    outline: none;
    border: none;
  }
`;

const Icon = styled.div`
  position: absolute;
  top: 5px;
  left: 14px;
  height: 48px;
  font-size: 28px;
  line-height: 48px;
  text-align: left;
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
  color: #ffeba7;
`;
