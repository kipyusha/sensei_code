import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { IModule } from "../../../../../redux/ducks/tasks/interfaces";
import TaskBlock from "./taskBlock/TaskBlock";
import Theme from "./theme/Theme";


interface Props {
  modules: IModule[] | undefined;
}

const Module = ({modules}: Props) => {
  
  const params = useParams()
  console.log(params)
  let currentModules;
  if (modules) {
    currentModules= modules.filter(el=>el.lang_id === Number(params.lang))
  }

  return (
    <Container>
      {currentModules?.map((el) => (
        <TaskBlock
          key={el.id}
          title={el.title}
          child={
            <Theme
              description={el.description}
              tasks={el.tasks}
              lang_id={el.lang_id}
            />
          }
        />
      ))}
    </Container>
  );
};

export default Module;

const Container = styled.div`
  width: 1200px;
  margin: 100px auto 0;
  background: rgba(0, 0, 0, 0.4);
  padding: 20px;
  border-radius: 15px;
`;
