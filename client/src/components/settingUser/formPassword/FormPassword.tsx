import React from "react";
import styled from "styled-components";
import FormButton from "./button/FormButton";
import FormPass from "./formPass/FormPass";

const FormPassword = () => {
  return (
    <Container>
      <Title>Пароль</Title>
      <FormContainer>
        <FormPass />
        <FormButton/>
      </FormContainer>
      
    </Container>
  );
};

export default FormPassword;

const Container = styled.div`
  
  width: 100%;
  height: max-content;
  border-radius: 15px;
  padding: 20px;

  background: rgba(0, 0, 0, 0.4);
`;
const Title = styled.span`
  font-size: 25px;
  color: rgba(255, 255, 255, 0.63);
  font-weight: 200;
  padding: 0 10px;
`;

const FormContainer = styled.div`
  width: 100%;
  padding: 30px 20px;
`;

