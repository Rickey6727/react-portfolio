import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
`

const Title = styled.h1`
  padding:50px;
  text-align: center;
`

export default class Animation extends React.Component {

  render() {
    return (
      <Wrapper>
        <Title>Animation</Title>
      </Wrapper>
    )
  }
}
