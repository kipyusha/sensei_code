import React from "react";
import styled from "styled-components";
import { RiTaskLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

interface Props {
  title: string;
  complexity: number;
  lang_id: number;
  task_id: number;
}

const Exercise = ({ title, complexity, lang_id, task_id }: Props) => {
  return (
    <Container to={`/tasks/${lang_id}/${task_id}`}>
      <Icon>
        <RiTaskLine />
      </Icon>
      <Title>{title}</Title>
      <Complexity>{complexity}</Complexity>
    </Container>
  );
};

export default Exercise;

const Container = styled(NavLink)`
  display: grid;
  grid-template-columns: 100px 1fr 50px;

  width: 100%;
  height: 75px;
  align-items: center;
  text-decoration: none;
  color: #fff;
  cursor: pointer;

  background: #292a2c;
  border-radius: 15px;
  margin-top: 20px;
  padding: 15px 10px;
  transition: all 500ms ease;
  &:hover {
    transform: scale(1.01);
  }
`;

const Icon = styled.div`
  width: 100%;

  font-size: 40px;
`;

const Title = styled.h2`
  width: 100%;
  text-align: center;
`;

const Complexity = styled.h2`
  width: 100%;
`;
