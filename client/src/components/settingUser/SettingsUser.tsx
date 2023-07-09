import React from 'react'
import styled from "styled-components";
import FormPassword from './formPassword/FormPassword';
import UserInformation from './information/UserInformation';

const SettingsUser = () => {
  return (
    <Container>
      <UserInformation/>
      <FormPassword/>
    </Container>
  )
}

export default SettingsUser;

const Container = styled.div`
    width: 1200px;
    margin: 0 auto;
    padding: 100px 0;
    display: grid;
    gap: 20px;
    align-items: center;
    
`