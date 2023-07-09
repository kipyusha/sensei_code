import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../../../../hooks";
import { fetchNewsById } from "../../../../../redux/ducks/news/asyncThunk";
import { getNews } from "../../../../../redux/ducks/news/selector";
import parse from "html-react-parser";
import { date_to_string } from "../../../../../helpers";

const PageNews = () => {
  const params = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (params.id) dispatch(fetchNewsById({ id: Number(params.id) }));
  }, [dispatch, params.id]);

  const news = useAppSelector(getNews).openedNews;

  return (
    <Container>
      <TextField>
        <Title>Статья</Title>
        <TitleText>{news?.title}</TitleText>
        <Wrap>
          {news && parse(news.content)}
          <DateComponent>
            Дата - {news && date_to_string(new Date(news.date))}
          </DateComponent>
        </Wrap>
      </TextField>
    </Container>
  );
};

export default PageNews;

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding-top: 50px;
`;

const Wrap = styled.div`
  padding: 0 20px;

  & p {
    text-align: justify;
    text-indent: 30px;
    padding: 10px 0;
  }
  & img {
    width: 100%;
    height: 100%;
  }
`;
const TextField = styled.div`
  overflow: scroll;
  overflow-x: hidden;

  background: #1f1f22;
  width: 1000px;
  height: 90vh;

  border-radius: 10px;
  margin-top: 10px;
  padding: 10px 15px;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    background: #1f1f22;
  }
  &::-webkit-scrollbar-thumb {
    background: #111;

    border-radius: 8px;
  }
`;

const Title = styled.h2`
  padding: 20px 10px 10px;
  border-bottom: 1px solid #fff;
`;

const TitleText = styled.h2`
  font-size: 20px;
  padding: 20px 20px 20px;
`;

const DateComponent = styled.p`
  padding: 20px 0 10px;
  text-align: right;
`;
