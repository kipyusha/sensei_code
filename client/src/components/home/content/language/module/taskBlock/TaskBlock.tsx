import React, { useState } from "react";
import styled from "styled-components";
import { downArrow } from "../../../../../../assets/img/svgIcons";
import { BiTaskX } from "react-icons/bi";

interface Props {
  title: string;

  child: JSX.Element;
}

const TaskBlock = ({ title, child }: Props) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div style={{ marginBottom: 20 }}>
      <TaskBlockContainer
        isActive={isActive}
        onClick={() => setIsActive(!isActive)}
      >
        <PreviewContainer>
          <IconContainer width={70}>
            <Icon>
              <BiTaskX />
            </Icon>
          </IconContainer>
          <Title>{title}</Title>
          <IconContainer width={50}>
            <ArrowSvg isActive={isActive} src={downArrow} alt="/" />
          </IconContainer>
        </PreviewContainer>

        <ContentContainer>{child}</ContentContainer>
      </TaskBlockContainer>
    </div>
  );
};

export default TaskBlock;

const Icon = styled.div`
  width: 100%;
  height: 100%;
  font-size: 50px;
  margin: 10px 0;
`;

const Title = styled.h2`
  font-size: 32px;
`;

const IconContainer = styled.div<{ width: number }>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.width}px;
  transition: all 0.3s ease;
`;

const TaskBlockContainer = styled.div<{ isActive: boolean }>`
  overflow: hidden;
  border-radius: 15px;
  background: #00000034;
  width: 100%;
  height: ${(props) => (props.isActive ? "900px" : "100px")};
  padding: 0 20px;

  transition: all 0.3s ease;
`;

const ContentContainer = styled.div``;

const PreviewContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
`;

const ArrowSvg = styled.img<{ isActive?: boolean }>`
  width: 100%;
  height: 100%;
  cursor: pointer;
  transition: all 0.3s ease;
  transform: rotate(${(props) => (props.isActive ? "180deg" : "0")});
`;
