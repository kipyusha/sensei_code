import React from 'react'
import styled from 'styled-components';
import parser from 'html-react-parser';

interface IProps {
    description?: string
}
const Instructions = ({description}: IProps) => {
  return (
    <>
        <Container>
            {description && parser(description)}
        </Container>
    </>
  )
}

export default Instructions

const Container = styled.div`
    overflow: scroll;
    overflow-x:hidden;
    
    background: #1f1f22;
    width: 750px;
    height: 800px;
    
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
    & p {
        text-align: justify;
        text-indent: 30px;
        padding: 10px 0;
        
    }
    & code {
        display: block;
        font-size: 18px;
        background: rgba(0,0,0,0.2);
        padding: 5px 10px;
        margin-left: 20px;
        margin-top: 10px;
        
    }
`