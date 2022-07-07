import React from 'react'
import Card from './Card'
import {calculateCardsSum} from '../utils/functions.js'

export default function PlayerCards(props){
    const {gameState} = props
    // console.log("playerCards", gameState.playerCards)
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
            {gameState.dealerCards !== undefined &&
            (<div className='sum-of-cards'>
                <span className='sum-of-cards-number'>{calculateCardsSum(gameState.playerCards)}</span>
                <span className='sum-of-cards-label'>Player</span>
            </div>)}
        </div>
    )
}