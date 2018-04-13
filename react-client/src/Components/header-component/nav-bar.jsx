import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.css'
import NavMenu from './nav-popout-menu/nav-popout'

export default class NavBar extends Component {
  render() {
    return (
      <header className={styles.header}>
        <NavMenu />
        <ul className={styles.headerButtons}>
          <li className={styles.navButton}><Link to="">Home</Link></li>
          <li className={styles.navButton}><Link to="/about">About</Link></li>
          <li className={styles.navButton}><Link to="/portfolio">Portfolio</Link></li>
        </ul>
      </header>
    )
  }
}
