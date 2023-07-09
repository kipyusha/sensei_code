import React, { useState } from "react";
import styled from "styled-components";
import { downArrow } from "../../../../../assets/img/svgIcons";
import ProgressContent from "./progressContent/ProgressContent";
import StatsTasks from "./statsTasks/StatsTasks";

interface Props {
  title: string;
  src: string;
  
}

const ProgressBlock = ({ src, title}: Props) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div style={{ marginBottom: 20 }}>
      <ProgressBlockContainer
        isActive={isActive}
        onClick={() => setIsActive(!isActive)}
      >
        <PreviewContainer>
          <IconContainer width={70}>
            <Icon src={src} alt="/" />
          </IconContainer>
          <Title>{title}</Title>
          <IconContainer width={50}>
            <Icon isActive={isActive} src={downArrow} alt="/" />
          </IconContainer>
        </PreviewContainer>

        <ContentContainer>
          <ProgressContent />
          <StatsTasks />
        </ContentContainer>
      </ProgressBlockContainer>
    </div>
  );
};

export default ProgressBlock;

const Icon = styled.img<{ isActive?: boolean }>`
  width: 100%;
  height: 100%;
  transform: rotate(${(props) => (props.isActive ? "180deg" : "0")});
  transition: all 0.3s ease;
`;

const Title = styled.h2`
  font-size: 32px;
`;

const IconContainer = styled.div<{ width: number }>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.width}px;
  transition: all 0.3s ease;
`;

const ProgressBlockContainer = styled.div<{ isActive: boolean }>`
  overflow: hidden;
  border-radius: 15px;
  background: #00000034;
  width: 100%;
  height: ${(props) => (props.isActive ? "500px" : "100px")};
  padding: 0 20px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #00000045;
  }

  /* &:hover div:first-child div {
    transform: scale(1.1);
  } */
`;

const ContentContainer = styled.div`
  padding: 0 20px;
`;

const PreviewContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
`;
