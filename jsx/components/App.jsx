import React from 'react'
import Header from './Header.jsx'
import Menu from './Menu.jsx'
import Footer from './Footer.jsx'
import Animation from './Animation.jsx'
import Info from './Info.jsx'
import StyledComponent from './StyledComponent.jsx'
import Redux from './Redux.jsx'
import Next from './Next.jsx'
import ComponentLifeCycle from './ComponentLifeCycle.jsx'
import { HashRouter as Router, BrowserRouter, Route, Link } from 'react-router-dom'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Menu />
        <Router>
          <Route path='/' exact component={Info} />
          <Route path='/styled-component' exact component={StyledComponent} />
          <Route path='/animation' exact component={Animation} />
          <Route path='/redux' exact component={Redux} />
          <Route path='/next' exact component={Next} />
          <Route path='/component-life-cycle' exact component={ComponentLifeCycle} />
        </Router>
        <Footer />
      </div>
    )
  }
}
