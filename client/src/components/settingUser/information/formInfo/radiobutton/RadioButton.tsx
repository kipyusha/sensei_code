import React from "react";
import styled from "styled-components";

// const Radio = () =>{
//   return(
//     <>
//       <Input type="radio" />
//       <Text>Новичок</Text>
//     </>
//   )
// }


const RadioButton = () => {
  
  return (
    <Container>
      <Input type="radio" />
      <Text>Новичок</Text>
      <Input type="radio" />
      <Text>Продвинутый</Text>
      <Input type="radio" />
      <Text>Опытный</Text>
      <Input type="radio" />
      <Text>Профессионал</Text>
    </Container>
  );
};

export default RadioButton;

const Container = styled.div``;

const Text = styled.span`
  font-weight: 300;
  padding-left: 5px;
  padding-right: 30px;
`;

const Input = styled.input`
  margin-bottom: 50px;
  padding: 5px;
  color: #fff;
  font-weight: 200;
  background: rgba(255, 255, 255, 0.2);
  border: none;
`;