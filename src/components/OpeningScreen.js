import React from 'react';
import logo from '../images/logo.png'
import {Link} from "react-router-dom"

export default function OpeningScreen(props){
    const {setGameState} = props
    function startGame(){
        setGameState(prevState => ({...prevState, started: true}))
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