import React from 'react'
import styled from 'styled-components'

const Wrapper=styled.div`
  width: 100%;
  padding: 10px;
`

const Content=styled.div`
  width: 200px;
  margin: 0 auto;
  border: solid 1px #00dbfe;
  padding: 10px;
`

export default class ComponentLifeCycle extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      message: '初期設定のままです'
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.message === '') {
      return { message: '初期設定のままです' };
    }
    return { message: nextProps.message };
  }

  render() {
    return (
      <Wrapper>
        <Content>
          {this.state.message}
        </Content>
      </Wrapper>
    )
  }
}
