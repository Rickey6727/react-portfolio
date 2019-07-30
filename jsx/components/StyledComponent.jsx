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
  padding: 20px 50px;
`

const LessonTitle = styled.h2`
`

const Lesson1 = styled.div`
  color: red;
  transition: 0.3s;
`

const Lesson2 = styled.div`
  &:hover {
    color: blue;
    transition: 0.3s;
  }
`

const Lesson3 = styled(Lesson1)`
`

const Lesson4 = styled(Lesson1)`
  &:hover {
    color: blue;
    transition: 0.3s;
  }
`

const Lesson5 = styled.div`
  &:before {
    content: 'MUDA NA TITLE';
    color: red;
    font-size: 42px;
    display: block;
  }
`

const Lesson6 = styled.div`
  &:after {
    content: 'MAJI DE MUDA NA TITLE';
    color: blue;
    font-size: 42px;
    display: block;
  }
`

export default class Header extends React.Component {

  render() {
    return (
      <Wrapper>
        <Title>Styled Component</Title>
        <Lesson><LessonTitle>Lesson1</LessonTitle><Lesson1>文字色red</Lesson1></Lesson>
        <Lesson><LessonTitle>Lesson2</LessonTitle><Lesson2>ホバーでblue</Lesson2></Lesson>
        <Lesson><LessonTitle>Lesson3</LessonTitle><Lesson3>Lesson1と同じスタイル</Lesson3></Lesson>
        <Lesson><LessonTitle>Lesson4</LessonTitle><Lesson4>Lesson1かつホバーでblue</Lesson4></Lesson>
        <Lesson><LessonTitle>Lesson5</LessonTitle><Lesson5>before擬似クラスを使う</Lesson5></Lesson>
        <Lesson><LessonTitle>Lesson6</LessonTitle><Lesson6>after擬似クラスを使う</Lesson6></Lesson>
      </Wrapper>
    )
  }
}
