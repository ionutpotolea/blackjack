import React, { useState, useEffect } from 'react'
import {Link} from "react-router-dom"
import Chips from "./Chips"
import CurrentBet from "./CurrentBet"
import PlayerCards from "./PlayerCards"
import DealerCards from "./DealerCards"

export default function PlayGame(props){
    const {gameState, setGameState} = props
    useEffect(() => {
        fetch('https://blackjack.fuzz.me.uk/sit', {
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
              },
            body: `balance=${1000}`
        })
        .then(res => res.json())
        .then(data => { 
            setGameState(prevState => ({
                ...prevState,
                ...data
            }))
            console.log("api called!")
        })
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
            <CurrentBet
                gameState={gameState}
                setGameState={setGameState}
            />
            {gameState.roundStarted && (
                <section className='cards'>
                    <DealerCards gameState={gameState}/>
                    <PlayerCards gameState={gameState}/>
                </section>
            )}
            <section className='funds'>
                <div className='balance'>Balance: <strong>${`${gameState.balance-gameState.bet}`}</strong></div>
                {!gameState.roundStarted &&
                <Chips
                    gameState={gameState}
                    setGameState={setGameState}
                />}
            </section>
            </div>
        </div>
    )
}