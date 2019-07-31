import React from 'react'
import styled from 'styled-components';

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

const StudyContext = styled.p`
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

export default class LocalStateForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      messages: []
    };
    this.addMessage = this.addMessage.bind(this);
  }
  addMessage() {
    this.state.messages.push({
      title: this.refs.newText.value
    });
    this.setState({
      messages : this.state.messages
    });
    this.refs.newText.value='';
  }
  render() {
    return (
      <Wrapper>
        <ContentTitle>プレゼンテーショナルコンポーネントなフォーム</ContentTitle>
        <StudyContext>Unmountingしても初期化される
        </StudyContext>
        <div>
          <Form type='text' ref='newText' placeholder='お名前入力してね'/>
          <Submit type='button' value='あいさつする →' onClick={this.addMessage}/>
        </div>
        <ul>
          {this.state.messages.map( (message, i) => {
            return <List key={i}>こんにちは、{message.title}さん。いらっしゃい。</List>
          })}
        </ul>
      </Wrapper>
    );
  }
}
