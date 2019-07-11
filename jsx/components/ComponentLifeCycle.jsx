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

export default class ComponentLifeCycle extends React.Component {

  render() {
    return (
      <Wrapper>
        <Title>ComponentLifeCycle</Title>
        <StudyContext>各コンポーネントライフサイクルごとのメソッドを検証していく</StudyContext>
      </Wrapper>
    )
  }
}
