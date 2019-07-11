import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

export default class Header extends React.Component {

  render() {
    return (
      <div>
        <Router>
          <Link to='/'>Home</Link>
          <Link to='/animation'>Animation</Link>
        </Router>
      </div>
    )
  }
}
