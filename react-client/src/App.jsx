import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import { browserHistory } from 'react-router'
import HomePage from './pages/home-page'
import AboutPage from './pages/about-page'
import PortfolioPage from './pages/portfolio-page'
import NavBar from './Components/header-component/nav-bar'
import Footer from './Components/footer-component/footer'

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route name="home" exact path="/" component={HomePage} />
          <Route name="about" exact path="/about" component={AboutPage} />
          <Route name="portfolio" exact path="/portfolio" component={PortfolioPage} />
          <Footer />
        </div>
      </Router>
    )
  }
}
