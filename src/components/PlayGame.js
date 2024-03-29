import React, { useEffect } from 'react'
import {Link} from "react-router-dom"

import Chips from "./Chips"
import PlaceBet from "./PlaceBet"
import Cards from "./Cards"
import GameActions from "./GameActions"
import {resetState} from '../utils/utils'


import dollarIcon from '../assets/icons/circe-dollar-sign-solid.svg'



export default function PlayGame(props){
    const {gameState, setGameState} = props
    useEffect(() => {
        if (!gameState.sessionId){
            fetch('https://blackjack.fuzz.me.uk/sit', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                  },
                body: `balance=${gameState.currentBalance}`
            })
            .then(res => res.json())
            .then(data => {
                if(!data.error){
                    setGameState(prevState => ({
                        ...prevState,
                        ...data
                    }))
                }
            })
            .catch(err => console.error(err))    
        }

        return 
        
        // eslint-disable-next-line
    }, [])

    function cashOut(){
        fetch('https://blackjack.fuzz.me.uk/stand', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                  },
                body: `sessionId=${gameState.sessionId}`
            })
            .then(res => res.json())
            .then(data => { 
                setGameState(prevState => ({
                    ...prevState,
                    ...resetState,
                    gameStarted: false,
                    availableBetOptions: [],
                    bet: 0,
                    sessionId: "",
                    ...data
                }))
            })
            .catch(err => console.error(err))
    }
    
    return (
        <div className='container'>
            <div className='game-board'>
            {
                !gameState.roundStarted &&
                <div>
                    <div className='top-btns'>
                        <Link
                            to="end-game"
                            className='btn btn-top'
                            onClick={cashOut}
                        >
                            <img src={dollarIcon} alt=""/>
                            <span>Cash out</span>
                        </Link>
                        <Link
                            to="add-funds"
                            className='btn btn-top'
                        >
                            <img src={dollarIcon} alt=""/>
                            <span>Add funds</span>
                        </Link>
                    </div>

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
                <div className='balance'>
                    Balance: <strong>${`${gameState.currentBalance}`}</strong>
                </div>
                {!gameState.roundStarted && 
                <Chips
                    gameState={gameState}
                    setGameState={setGameState}
                />}
            </section>
            {
                gameState.winAmount !== 0 &&
                <section className="gains">
                    <div className='win-amount'>
                        Win Amount: <strong>{gameState.winAmount>=0 ? `$${gameState.winAmount}`: `-$${gameState.winAmount*-1}`}</strong>
                    </div>
                </section>
            }
            
            </div>
        </div>
    )
}