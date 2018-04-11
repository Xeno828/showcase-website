import React, { Component } from 'react'
import styles from './styles.css'

export default class Footer extends Component {
  render() {
    return (
      <footer className={styles.footer}>
      <a href="https://twitter.com/JustJoshnRound?ref_src=twsrc%5Etfw" target="blank" class="twitter-follow-button" data-size="large"
        data-show-count="false">Follow @JustJoshnRound</a>
        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
      </footer>
    )
  }
}
