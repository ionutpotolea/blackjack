import React, { useEffect } from 'react';
import {Link} from "react-router-dom"
import Chips from "./Chips"

export default function PlayGame(props){
    const {gameState} = props
    console.log(JSON.stringify({
        balance: gameState.balance
    }))
    useEffect(() => {
        fetch('https://blackjack.fuzz.me.uk/sit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
              },
            body: {
                "balance": gameState.balance
            }
        })
        .then(res => res.json())
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
            <section className='funds'>
                <div className='balance'>Balance: <strong>${`${gameState.balance}`}</strong></div>
                <Chips />
            </section>
            </div>
        </div>
    )
}