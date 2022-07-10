import React from 'react'
import {Link} from "react-router-dom"
import logo from '../assets/images/logo.png'

export default function OpeningScreen(props){
    const {setGameState} = props
    function startGame(){
        setGameState(prevState => ({
            ...prevState,
            gameStarted: true
        }))
    }

    return (
        <div className='opening-screen-container'>
            <img src={logo} className="logo" alt="game logo" />
            <Link
                to="/blackjack/play-game"
                className='btn btn-start-game'
                onClick={startGame}
            >
                Play
            </Link>
        </div>
    )
}