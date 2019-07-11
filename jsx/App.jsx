import React from 'react'
import Menu from './Menu.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Animation from './Animation.jsx'
import Info from './Info.jsx'
import StyledComponent from './StyledComponent.jsx'
import { HashRouter as Router, BrowserRouter, Route, Link } from 'react-router-dom'

export default class App extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <Menu />
        <Router>
          <Route path='/' exact component={Info} />
          <Route path='/animation' exact component={Animation} />
          <Route path='/styled-component' exact component={StyledComponent} />
        </Router>
        <Footer />
      </div>
    )
  }
}
