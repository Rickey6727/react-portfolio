import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-bottom: 250px;
`

const Title = styled.h1`
  padding:50px;
  text-align: center;
`

const Lesson = styled.div`
  background-color: #444444;
`

const Lesson1 = styled.h1`
  color: red;
`

const Lesson2 = styled.h1`
  &:hover {
    color: blue;
  }
`

const Lesson3 = styled(Lesson1)`
`

const Lesson4 = styled(Lesson1)`
  &:hover {
    color: blue;
  }
`

export default class Header extends React.Component {

  render() {
    return (
      <Wrapper>
        <Title>Styled Component</Title>
        <Lesson>Lesson1:<Lesson1>赤いh1タグになる</Lesson1></Lesson>
        <Lesson>Lesson2:<Lesson2>ホバーすると青に変わる</Lesson2></Lesson>
        <Lesson>Lesson3:<Lesson3>Lesson1と同じスタイルになる</Lesson3></Lesson>
        <Lesson>Lesson4:<Lesson4>Lesson1かつホバーすると青に変わる</Lesson4></Lesson>
      </Wrapper>
    )
  }
}
