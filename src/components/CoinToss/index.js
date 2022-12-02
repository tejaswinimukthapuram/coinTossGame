// Write your code here

import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    total: 0,
    heads: 0,
    tails: 0,
    coinImage: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  onButtonClick = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({
        total: prevState.total + 1,
        heads: prevState.heads + 1,
        coinImage: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      }))
    } else {
      this.setState(prevState => ({
        total: prevState.total + 1,
        tails: prevState.tails + 1,
        coinImage: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      }))
    }
  }

  render() {
    const {heads, tails, total, coinImage} = this.state
    return (
      <div className="app-container">
        <div className="card-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="heads-tails-text">Heads (or) Tails</p>
          <img src={coinImage} alt="toss result" className="coin-image" />
          <button className="button" type="button" onClick={this.onButtonClick}>
            Toss Coin
          </button>
          <div className="score-container">
            <p>Total:{total}</p>
            <p>Heads:{heads}</p>
            <p>Tails:{tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
