import React from "react";
import styled from "styled-components";
import { useAppSelector } from "../../../../hooks";
import { getTasks } from "../../../../redux/ducks/tasks/selector";
import Module from "./module/Module";

const Language = () => {
  const tasks = useAppSelector(getTasks);

  return (
    <>
      <Container>
        <Module modules={tasks} />
      </Container>
    </>
  );
};

export default Language;

const Container = styled.div`
  background: #292a2c;
  width: 100%;
  height: max-content;
  min-height: 100vh;
  padding: 10px 0;
`;
