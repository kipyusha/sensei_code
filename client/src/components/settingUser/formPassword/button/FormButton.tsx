import React from 'react'
import styled from "styled-components";

const FormButton = () => {
  return (
    <>
    <Button>Сохранить изменения</Button>
    </>
  )
}

export default FormButton

const Button = styled.button`
  cursor: pointer;
  border-radius: 5px;
  border: none;
  padding: 5px 10px;
  &:hover{
    background-color: rgba(255, 255, 255, 0.63);
  }
`;
