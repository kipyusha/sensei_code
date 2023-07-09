import React from 'react'
import styled from 'styled-components';
import Progress from './Progress/Progress';

const Stats = () => {
  return (
    <StatsContainer>
        <Progress />
    </StatsContainer>
  )
}

export default Stats;

const StatsContainer = styled.div`
    width: 100%;
    
    border-radius: 15px;
    padding: 20px;

    background: rgba(0, 0, 0, 0.4);
`