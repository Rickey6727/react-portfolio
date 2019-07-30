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
          お名前:
          <input type='text' ref={(input) => this.textInput = input} placeholder={this.props.message}/>
          <input type='submit' value='あいさつする'/>
        </form>
        <div className='content'>
          <ul>
            { this.props.messages.map((message) => (
                <List>こんにちは、{ Object.values(message) }さん。いらたい。</List>
              ))
            }
          </ul>
        </div>
      </Wrapper>
    );
  }
}
