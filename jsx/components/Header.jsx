import React from 'react'
import styled from 'styled-components';

const HeaderStyle = styled.div`
  width: 100vw;
  color: #00dbfe;
  text-align: center;
  position: fixed;
  background-color: #141414e6;
  z-index:9998;
`

const Text = styled.h1`
  font-size: 67px;
  margin: 0;
`


export default class Header extends React.Component {

  render() {
    return (
      <HeaderStyle>
        <Text>ReactStudyNote</Text>
      </HeaderStyle>
    )
  }
}
