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
        <div>
          お名前: 
          <input type='text' ref='newText'/>
          <input type='button' value='あいさつする' onClick={this.addMessage}/>
        </div>
        <ul>
          {this.state.messages.map( (message, i) => {
            return <List key={i}>こんにちは、{message.title}さん。いらたい。</List>
          })}
        </ul>
      </Wrapper>
    );
  }
}
