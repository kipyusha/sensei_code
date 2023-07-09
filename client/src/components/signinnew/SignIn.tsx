import React, { useState } from "react";
import styled from "styled-components";
import CardBack from "./cardBack/CardBack";
import CardFront from "./cardFront/CardFront";
import { upArrow } from "../../assets/img/svgIcons";

const SignIn = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <Section>
      <Container>
        <Title>Sign In</Title>
        <Button onClick={(e) => setIsActive(!isActive)}>
          <Circle isFlip={isActive}>
            <img src={upArrow} alt="" />
          </Circle>
        </Button>
        <Title>Sign Up</Title>
      </Container>
      <Card3dContainer>
        <Card3dWrapper isFlip={isActive}>
          <CardFront />
          <CardBack />
        </Card3dWrapper>
      </Card3dContainer>
    </Section>
  );
};

export default SignIn;

const Title = styled.span`
  color: #ffeba7;
  margin: 0 20px;
  font-weight: 700;
`;

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  width: fit-content;
`;

const Section = styled.div`
  position: relative;
  width: fit-content;
  display: block;
  margin: 0 auto;
  padding: 100px 0;
`;

const Card3dContainer = styled.div`
  position: relative;
  width: 440px;
  max-width: 100%;
  height: 400px;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  perspective: 800px;
  margin-top: 20px;
`;

const Card3dWrapper = styled.div<{ isFlip: boolean }>`
  width: 100%;
  height: 100%;
  position: absolute;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  transition: all 600ms ease-out;
  box-shadow: 0 0 20px rgba(21, 21, 21, 0.5);

  transform: rotateY(${(props) => (props.isFlip ? "180deg" : 0)});
`;

const Button = styled.button`
  display: block;
  position: relative;
  margin: 0 auto;
  width: 60px;
  height: 16px;
  border-radius: 8px;
  cursor: pointer;

  background-color: #ffeba7;
  outline: none !important;
  border: none !important;
`;

const Circle = styled.div<{ isFlip: boolean }>`
  width: 36px;
  height: 36px;
  padding: 6px;
  border-radius: 50%;
  background-color: #020305;
  position: absolute;
  top: -10px;
  left: -10px;

  transition: all 0.3s ease;

  transform: translateX(${(props) => (props.isFlip ? "50px" : 0)})
    rotate(${(props) => (props.isFlip ? "270deg" : 0)});
`;
