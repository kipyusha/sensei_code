import React from "react";
import styled from "styled-components";
import RadioButton from "./radiobutton/RadioButton";

const FormInfo = () => {
  return (
    <form>
      <Container>
        <BlockContainer>
          <NameInput>Электронная почта</NameInput>
          <Input></Input>

          <NameInput>Имя</NameInput>
          <Input></Input>
        </BlockContainer>

        <BlockContainer>
          <NameInput>Имя пользователя</NameInput>
          <Input></Input>
          <NameInput>Команда</NameInput>
          <Input></Input>
        </BlockContainer>
      </Container>
      <BlockContainer>
        <NameInput>Навыки(через запятую)</NameInput>
        <Input></Input>
      </BlockContainer>

      <BlockContainer>
        <NameInput>Опыт разработки</NameInput>
        <RadioButton/>
        
      </BlockContainer>
    </form>
  );
};

export default FormInfo;

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

