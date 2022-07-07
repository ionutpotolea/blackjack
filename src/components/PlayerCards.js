import React from 'react'
import Card from './Card'
import Message from './Message' 
import {calculateCardsSum} from '../utils/functions.js'

export default function PlayerCards(props){
    const {gameState} = props
    const renderedPlayerCards = gameState.playerCards ? gameState.playerCards.map(
        (card, index) => (
            <Card
                key={index}
                card={card}
            />
        )
    ) : ""
    
    return (
        <div className='playerCards'>
            <div className='cards-container'>
                {renderedPlayerCards}
            </div>
            {gameState.playerCards !== undefined &&
            (<div className='sum-of-cards'>
                <span className='sum-of-cards-number'>{calculateCardsSum(gameState.playerCards)}</span>
                <span className='sum-of-cards-label'>Player</span>
            </div>)}
            {gameState.roundEnded &&
                <Message
                    message={`You ${gameState.winAmount > 0 ? "win" : "lose"}`}
                    color={gameState.winAmount > 0 ? "orange" : "darkgray"}
                    delayed={gameState.winAmount > 0 ? false : true}
                />
            }
        </div>
    )
}