import React from "react";
import styled from "styled-components";
import Stats from "./Stats/Stats";
import InfoUser from "./infoUser/InfoUser";


const Profile = () => {
  
  return <>
  <Container>
    <InfoUser/>
    <Stats />
  </Container>
  </>;
};

export default Profile;

const Container = styled.div`
    width: 1200px;
    margin: 0 auto;
    padding: 100px 0;
    display: grid;
    gap: 20px;
    align-items: center;
    
`

