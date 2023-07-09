import React from "react";
import styled from "styled-components";
import parse from "html-react-parser";
import Exercise from "./exercise/Exercise";
import { ITheme } from "../../../../../../redux/ducks/tasks/interfaces";

const Theme = ({ description, lang_id, tasks }: ITheme) => {
  return (
    <>
      <ContentText>{parse(description)}</ContentText>
      <NumComplexity>Сложность</NumComplexity>
      {tasks.map((task) => (
        <Exercise
          key={task.task_id}
          title={task.title}
          complexity={task.complexity}
          lang_id={lang_id}
          task_id={task.task_id}
        />
      ))}
    </>
  );
};

export default Theme;

const ContentText = styled.div`
  text-align: justify;
`;

const NumComplexity = styled.h3`
  width: max-content;
  margin-left: 1000px;
  padding: 10px;
  background: #292a2c;
  border-radius: 15px;
`;
