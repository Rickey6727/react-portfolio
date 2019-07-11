import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  text-align: center;
`

const ContentTitle = styled.h2`
  padding-top: 50px;
  color: #00dbfe;
`

const List = styled.li`
  list-style: none;
`

const Form = styled.input`
  margin-left: 10px;
  background-color: #ffffff00;
  border: solid 3px #04dbfe;
  padding: 10px;
  width: 200px;
  color: #ffffff;
`

const Submit = styled.input`
  background-color: transparent;
  border: solid 1px #ffffff;
  cursor: pointer;
  outline: none;
  margin-left: 40px;
  padding: 0 10px;
  appearance: none;
  color: #ffffff;
  transition: 0.3s;
  &:hover {
    color: #04dbfe;
    border: solid 1px #04dbfe;
    transition: 0.3s;
  }
`

export default class GlobalStateForm extends React.Component {

  handleSubmit(e) {
    e.preventDefault();
    this.props.onMessageSubmit(this.textInput.value);
    this.textInput.value = ''
  }
  render() {
    return (
      <Wrapper>
        <ContentTitle>コンテナコンポーネントなフォーム</ContentTitle>
        <form onSubmit={e => this.handleSubmit(e)}>
          <Form type='text' placeholder='お名前入力してね' ref={(input) => this.textInput = input} />
          <Submit type='submit' value='あいさつする →'/>
        </form>
        <div className='content'>
          <ul>
            { this.props.messages.map((message) => (
                <List>こんにちは、{ Object.values(message) }さん。初めまして。</List>
              ))
            }
          </ul>
        </div>
      </Wrapper>
    );
  }
}
