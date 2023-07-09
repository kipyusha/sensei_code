import React from "react";
import styled from "styled-components";

const FormPass = () => {
  return (
    <form>
    <Container>
      <BlockContainer>
        <NameInput>Новый пароль</NameInput>
        <Input></Input>
      </BlockContainer>
      <BlockContainer>
        <NameInput>Подтвердить новый пароль</NameInput>
        <Input></Input>
      </BlockContainer>
    </Container>
    
    </form>
  );
};

export default FormPass;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
`;

const BlockContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
`;

const NameInput = styled.label`
  margin-bottom: 10px;
`;

const Input = styled.input`
  margin-bottom: 50px;
  padding: 5px;
  color: #fff;
  font-weight: 200;
  background: rgba(255, 255, 255, 0.2);
  border: none;
`;

