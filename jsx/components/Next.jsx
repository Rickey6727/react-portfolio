import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
  margin-bottom: 250px;
`

const Title = styled.h1`
  padding:50px;
`

const StudyContext = styled.p`
`

export default class Next extends React.Component {

  render() {
    return (
      <Wrapper>
        <Title>Next.js</Title>
        <StudyContext>Next.jsの概要を調べて検証してみる</StudyContext>
      </Wrapper>
    )
  }
}
