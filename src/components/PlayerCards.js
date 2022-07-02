import React from 'react'
import Card from './Card'


export default function PlayerCards(props){
    const {gameState} = props
    console.log("playerCards", gameState.playerCards)
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
            {renderedPlayerCards}
        </div>
    )
}