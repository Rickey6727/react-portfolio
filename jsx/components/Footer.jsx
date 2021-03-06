import React from 'react'
import styled from 'styled-components';

const FooterStyle = styled.div`
  width: 100vw;
  color: #00dbfe;
  text-align: center;
  position: fixed;
  bottom: 0;
  background-color: #141414e6;
  z-index:9998;
`

const Text = styled.p`
  line-height: 50px;
  vertical-align: middle;
`

export default class Footer extends React.Component {

  render() {
    return (
      <div>
        <FooterStyle>
          <Text>©️RirikiNakabayashi 2019</Text>
        </FooterStyle>
      </div>
    )
  }
}
