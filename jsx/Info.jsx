import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
`

const Title = styled.h1`
  padding:50px;
`

export default class Info extends React.Component {

  render() {
    return (
      <Wrapper>
        <Title>Home</Title>
        <p>このReactStudyNoteは、Reactのエコシステムを勉強して試験的に実装・公開するためのものです。</p>
        <p>スタイルやアニメーション、コンポーネントライフサイクルなどを、各項目ごとにまとめています。</p>
        <p>画面上部のメニューバーより、気になるページへ遷移してご覧ください。</p>
      </Wrapper>
    )
  }
}
