import React from 'react'
import Chip from './Chip'

export default function PlaceBet(props){
    const {gameState, setGameState} = props

    function removeBet(){
        if (!gameState.roundStarted){
            setGameState(prevState => ({
                ...prevState,
                bet: 0
            }))
        }
    }

    function dealCards(){
        setGameState(prevState => ({
            ...prevState,
            roundStarted: true,
            gameStarted: true
        }))
        fetch('https://blackjack.fuzz.me.uk/deal', {
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
              },
            body: `bet=${gameState.bet}&sessionId=${gameState.sessionId}`
        })
        .then(res => res.json())
        .then(data => { 
            setGameState(prevState => ({
                ...prevState,
                ...data
            }))
        })
        .catch(err => console.error(err))
    }

    return (
        <div className='current-bet'>

            {gameState.bet!==0 &&
            <Chip
                betOption={gameState.bet}
                gameState={gameState}
                chipAction={removeBet}
                staked={true}
            />
            }

            {(gameState.bet!==0 && !gameState.roundStarted) &&
            <button
                className='btn btn-primary btn-deal'
                onClick={dealCards}
            >
                Deal
            </button>}
            
        </div>
    )
}