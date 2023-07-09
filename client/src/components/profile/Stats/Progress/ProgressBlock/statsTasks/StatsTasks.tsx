import React from 'react'
import styled from 'styled-components'
import { useAppSelector } from '../../../../../../hooks'
import { getUserInfo } from '../../../../../../redux/ducks/userInfo/selectors'

const StatsTasks = () => {
    const userInfo = useAppSelector(getUserInfo).userInfo;
    return (
    <Container>
        <Title>Статистика выполненных заданий:</Title>
        <TaskContainer>
            <TaskProgress>Выполненно заданий ({userInfo.tasks_completed})</TaskProgress>
            <TaskProgress>Комментарии (0)</TaskProgress>
            <TaskProgress>Достижения (0)</TaskProgress>
        </TaskContainer>
    </Container>
  )
}

export default StatsTasks

const Container = styled.div`
    margin-top: 10px ;
`

const Title = styled.h2`
    padding-bottom: 10px;
`

const TaskContainer = styled.div`
    width: 500px;
`

const TaskProgress = styled.p`
    width: 100%;
    background: #292A2C;
    margin-bottom: 5px;
    padding: 5px 10px;
`