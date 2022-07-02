import React, { useEffect } from 'react';
import {Link} from "react-router-dom"
import Chips from "./Chips"
import CurrentBet from "./CurrentBet"

export default function PlayGame(props){
    const {gameState, setGameState} = props
    useEffect(() => {
        fetch('https://blackjack.fuzz.me.uk/sit', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json; charset=utf-8",
              },
            body: {
                "balance": 1000
            }
        })
        .then(res => {
            res.json()
        })
        .then(data => console.log(data))
        .catch(err => console.error(err))
    }, [])

    return (
        <div className='container'>
            <div className='game-board'>
            {
                !gameState.roundStarted &&
                <Link
                    to="end-game"
                    className='btn-cash-out'
                >
                    <span className="cash-out-icon">$</span>
                    <span>Cash out</span>
                </Link>
            }
            <CurrentBet gameState={gameState} setGameState={setGameState}/>
            <section className='funds'>
                <div className='balance'>Balance: <strong>${`${gameState.balance-gameState.bet}`}</strong></div>
                <Chips gameState={gameState} setGameState={setGameState} />
            </section>
            </div>
        </div>
    )
}