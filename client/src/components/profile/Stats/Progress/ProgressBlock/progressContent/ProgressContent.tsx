import React from 'react'
import styled from 'styled-components'
import { useAppSelector } from '../../../../../../hooks';
import { getUserInfo } from '../../../../../../redux/ducks/userInfo/selectors';



const ProgressContent = () => {
    const userInfo = useAppSelector(getUserInfo).userInfo;
  return (
    <Container>
        <ContainerContent>
            <Title>Статистика:</Title>
            <Text>Ранг: {userInfo.rank}</Text>
            <Text>Выполнено заданий: {userInfo.tasks_completed}</Text>
        </ContainerContent>

        <ContainerContent>
            <Title>Язык:</Title>
            <Text>Последний язык: {userInfo.last_lang}</Text>
        </ContainerContent>

        <ContainerContent>
            <Title>Обучение:</Title>
            <Text>Python: {userInfo.tasks_completed}</Text>
            <Text>JavaScript: {userInfo.tasks_completed}</Text>
            <Text>C++: {userInfo.tasks_completed}</Text>
        </ContainerContent>
    </Container>
  )
}

export default ProgressContent

const Container = styled.div`
    
    display:grid ;
    grid-template-columns: 400px 1fr 300px;
    
`

const ContainerContent = styled.div`
    
`

const Text = styled.p`
    padding-bottom: 5px ;
`

const Title = styled.h2`
    padding-bottom: 10px;
`