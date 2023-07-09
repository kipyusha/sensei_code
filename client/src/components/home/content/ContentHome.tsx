import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../../hooks";
import { getLanguages } from "../../../redux/ducks/languages/selector";
import { SiCplusplus, SiPython } from "react-icons/si";
import { IoLogoJavascript } from 'react-icons/io';
import News from "./news/News";

const ContentHome = () => {
  const languages = useAppSelector(getLanguages);

  return (
    <>
      <Container>
        <SpanHeader>Главная</SpanHeader>
        <LanguageSelection>
          <Text>Выберите языки, на которых вы хотите обучаться:</Text>
          <ContainerLanguage>
            {languages.map((el) => (
              <Language
                key={el.id}
                to={`/tasks/${el.id}`}
                background={el.background}
                color={el.color}
              >
                <Svg>
                  {el.icon === "js" && <IoLogoJavascript/>}
                  {el.icon === "python" && <SiPython/>}
                  {el.icon === "c++" && <SiCplusplus/>}
                </Svg>
                <LanguageText>{el.title}</LanguageText>
              </Language>
            ))}
          </ContainerLanguage>
        </LanguageSelection>
        <LanguageSelection>
          <Title>Новости</Title>
          <News/>
        </LanguageSelection>
        
      </Container>
    </>
  );
};

export default ContentHome;

const Container = styled.div`
  width: 100%;
  height: 100vh;

  padding: 10px 0;
`;

const SpanHeader = styled.div`
  width: max-content;
  color: #fff;
  background: rgba(0, 0, 0, 0.4);
  padding: 10px;
  margin-left: 75px;
  border-radius: 5px;
`;

const ContainerLanguage = styled.div`
  display: flex;
`;

const LanguageSelection = styled.div`
  width: 1000px;
  height: max-content;
  min-height: 200px;
  background: rgba(0, 0, 0, 0.4);
  margin: 50px auto;
  border-radius: 15px;
  backdrop-filter: blur(5px);
  padding: 0 10px;
`;
const Text = styled.div`
  font-size: 20px;
  color: #fff;
  font-weight: 500;
  padding: 20px;
`;
const Svg = styled.svg`
  width: 75px;
  height: 75px;
  font-size: 50px;
  padding: 10px;
  margin: 0 15px;
  color: #fff;
  transition: all 500ms ease;
`;
const LanguageText = styled.span`
  color: #fff;
`;

const Language = styled(NavLink)<{ background: string }>`
  display: flex;
  flex-direction: column;

  text-align: center;
  background: rgba(0, 2, 2, 0.2);
  width: 100px;
  height: 100px;
  text-decoration: none;
  margin: 10px 0px 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 500ms ease;

  &:hover {
    transform: scale(1.1);
    background: ${(props) => props.background};
  }
  &:hover ${Svg} {
    color: ${(props) => props.color};
  }
  &:hover ${LanguageText} {
    color: ${(props) => props.color};
  }
`;

const Title = styled.h2`
  margin-bottom: 10px;
  padding: 15px 20px 0;
`;