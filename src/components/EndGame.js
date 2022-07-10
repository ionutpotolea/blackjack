import React from "react"
import {Link} from "react-router-dom"
import logo from '../assets/images/logo.png'

export default function EndGame(props){
    const {gameState, setGameState} = props

    function startGame(){
        setGameState(prevState => ({
            ...prevState,
            gameStarted: true,
            currentBalance: prevState.currentBalance > 1000 ? 1000 : prevState.currentBalance,
            roundsPlayed: 0,
            winAmount: 0
        }))
    }

    return (
        <div className='end-game-container'>
            <img src={logo} className="logo" alt="game logo" />
            <div className="stats">
                <h2 className="stats-title">Your stats:</h2>
                <ul className="stats-list">
                    <li className="stats-item">
                        <span>Balance: </span>
                        <strong>{gameState.currentBalance}</strong>
                    </li>
                    <li className="stats-item">
                        <span>Rounds played: </span>
                        <strong>{gameState.roundsPlayed}</strong>
                    </li>
                    <li
                        className={`stats-item ${gameState.winAmount>0 ? 'positive' :
                            gameState.winAmount<0 ? 'negative': ''}`}>
                        <span>Total gains: </span>
                        <strong>{gameState.winAmount}</strong>
                    </li>
                </ul>
            </div>
            <Link
                to="/blackjack/play-game"
                className='btn btn-start-game'
                onClick={startGame}
            >
                Play again
            </Link>
        </div>
    )
}