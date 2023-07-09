import React from 'react'

import styled from "styled-components";

import ContentHome from './content/ContentHome'


const Home = () => {
  return (
    <>
    <Container>
      <ContentHome/>
    </Container>
    </>
  )
}

export default Home

const Container = styled.div`
  width: 100%;
  background: #292A2C;
  height: 100vh;
  
`