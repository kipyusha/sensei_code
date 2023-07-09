import React, {useState} from "react";
import Editor from "./Editor/Editor";
import styled from "styled-components";
import Output from "./Output/Output";

interface Props {
  answer?: string
}

const EditorMain = ({answer}:Props) => {
  const [isRightAnswer, setisRightAnswer] = useState(false);
  const [isStart, setisStart] = useState(false);

  return (
    <MainWrapper>
      <Editor setisRightAnswer={setisRightAnswer} setisStart={setisStart} answer={answer} />
      <Output isRight={isRightAnswer} isStart={isStart} />
    </MainWrapper>
  );
};
export default EditorMain;

const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
