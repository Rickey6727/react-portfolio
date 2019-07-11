import React from 'react'
import Menu from './Menu.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Animation from './Animation.jsx'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

export default class App extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <Router>
          <Route path='/' exact component={Menu} />
          <Route path='/animation' exact component={Animation} />
        </Router>
        <Footer />
      </div>
    )
  }
}
