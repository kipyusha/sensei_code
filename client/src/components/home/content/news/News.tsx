import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import { fetchNews } from "../../../../redux/ducks/news/asyncThunk";
import { getNews } from "../../../../redux/ducks/news/selector";
import { date_to_string } from "../../../../helpers";

const News = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  const news = useAppSelector(getNews).newsList;
  return (
    <>
      {news?.map((el) => (
        <Container key={el.id} to={`/news/${el.id}`}>
          <BlockNews>
            <Wrap>
              <Category>Статья</Category>
              <DateNews>{date_to_string(new Date(el.date))}</DateNews>
            </Wrap>
            <TitleText>{el.title}</TitleText>
            <ContentText>{el.description}</ContentText>
          </BlockNews>
        </Container>
      ))}
    </>
  );
};

export default News;

const Container = styled(NavLink)`
  width: 100%;
  padding: 10px 20px;
  text-decoration: none;
`;

const TitleText = styled.h2`
  font-size: 20px;
  border-bottom: 2px solid #fff;
  padding-bottom: 10px;
`;

const BlockNews = styled.div`
  width: 100%;
  height: 145px;
  background: #292a2c;
  border-radius: 5px;
  padding: 5px;
  overflow: hidden;

  color: #fff;
  cursor: pointer;
  transition: all 500ms ease;
  &:hover {
    background: #393a3df0;
  }
  &:hover ${TitleText} {
    border-bottom: 2px solid rgba(247, 243, 16);
  }
`;

const Wrap = styled.div`
  display: flex;
  gap: 10px;
`;

const Category = styled.p`
  width: 100px;
  background: rgba(0, 2, 2, 0.5);
  color: rgba(247, 243, 16);
  padding: 5px 10px;
  text-align: center;
  border-radius: 5px;
`;

const DateNews = styled.p`
  padding: 5px 0;
`;

const ContentText = styled.p`
  text-align: justify;
  padding: 5px 10px;
`;
