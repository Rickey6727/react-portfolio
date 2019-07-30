import React from 'react'
import GlobalStateFormContainer from '../containers/GlobalStateFormContainer.jsx'
import LocalStateForm from './LocalStateForm.jsx'
import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
  margin-bottom: 250px;
`

const Title = styled.h1`
  padding:50px;
`

const StudyContext = styled.p`
  padding-left: 50px;
`

export default class Redux extends React.Component {

  render() {
    return (
      <Wrapper>
        <Title>Redux</Title>
        <StudyContext>このコンポーネント内でプレゼンテーショナルコンポーネントとコンテナコンポーネントを作る</StudyContext>
        <StudyContext>stateをローカルで保持したいものに関してはプレゼンテーショナルコンポーネント。</StudyContext>
        <StudyContext>stateをグローバルで保持したいものに関してはコンテナコンポーネント。</StudyContext>
        <StudyContext>それぞれのフォームを作成してみる。</StudyContext>
        <LocalStateForm />
        <GlobalStateFormContainer />
      </Wrapper>
    )
  }
}
