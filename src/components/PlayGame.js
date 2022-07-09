import React, { useEffect } from 'react'
import {Link} from "react-router-dom"
import Chips from "./Chips"
import PlaceBet from "./PlaceBet"
import Cards from "./Cards"
import GameActions from "./GameActions"
import dollarIcon from '../assets/icons/circe-dollar-sign-solid.svg'


export default function PlayGame(props){
    const {gameState, setGameState} = props
    useEffect(() => {
        fetch('https://blackjack.fuzz.me.uk/sit', {
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
              },
            body: `balance=${gameState.currentBalance}`
        })
        .then(res => res.json())
        .then(data => { 
            setGameState(prevState => ({
                ...prevState,
                ...data
            }))
        })
        .catch(err => console.error(err))
    }, [])
    
    return (
        <div className='container'>
            <div className='game-board'>
            {
                !gameState.roundStarted &&
                <div>
                    <Link
                        to="end-game"
                        className='btn btn-top'
                    >
                        <img src={dollarIcon} alt=""/>
                        <span>Cash out</span>
                    </Link>
                    <PlaceBet
                        gameState={gameState}
                        setGameState={setGameState}
                    />
                </div>
            }
            
            {gameState.roundStarted && (
                <div>
                    <section className='cards'>
                        {gameState.dealerCards && <Cards gameState={gameState} owner="dealerCards"/>}
                        {gameState.playerCards && <Cards gameState={gameState} owner="playerCards"/>}
                    </section>
                    <GameActions
                        gameState={gameState}
                        setGameState={setGameState}
                    />
                </div>
            )}
            <section className='funds'>
                <div className='balance'>Balance: <strong>${`${gameState.currentBalance}`}</strong></div>
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