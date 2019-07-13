import React from 'react'
import styled from 'styled-components';
import { HashRouter as Router, Route, Link } from 'react-router-dom'

const Wrapper = styled.div`
  padding-top: 150px;
`

const MenuStyle = styled.div`
  width: 100vw;
  position: fixed;
  top: 100px;
  background-color: #00dbfe;
`

const LinkStyle = styled.div`
  color: #ffffff;
  background-color: #00dbfe;
  height: 26px;
  width: 200px;
  float:left;
  text-align: center;
  border-right: 5px solid #ffffff;
  transition: 0.3s;
  &:hover {
    color: #00dbfe;
    background-color: #ffffff;
    transition: 0.3s;
  }
`

export default class Menu extends React.Component {

  render() {
    return (
      <Wrapper>
        <MenuStyle>
          <Router>
            <Link to='/'><LinkStyle>Home</LinkStyle></Link>
            <Link to='/animation'><LinkStyle>Animation</LinkStyle></Link>
            <Link to='/styled-component'><LinkStyle>styled-component</LinkStyle></Link>
          </Router>
        </MenuStyle>
      </Wrapper>
    )
  }
}
