import React from 'react'
import Card from './Card'
import {calculateCardsSum} from '../utils/functions.js'

export default function DealerCards(props){
    const {gameState} = props
    // console.log("dealerCards", gameState.dealerCards)

    function renderDealerCards(){
        if(gameState.dealerCards){
            if (gameState.dealerCards.length === 1){
                const renderedDealerCards = [...gameState.dealerCards]
                renderedDealerCards.unshift({suite: 'back-side', rank: ''})
                return renderedDealerCards.map((card, index) => (<Card
                    key={index}
                    card={card}
                />))
            } else {
                return gameState.dealerCards.map((card, index) => (<Card
                    key={index}
                    card={card}
                />))
            }
            
        } else return ""
    }
    
    return (
        <div className='dealerCards'>
            <div className='cards-container'>
                {renderDealerCards()}
            </div>
            {gameState.dealerCards !== undefined &&
            (<div className='sum-of-cards'>
                <span className='sum-of-cards-number'>{calculateCardsSum(gameState.dealerCards)}</span>
                <span className='sum-of-cards-label'>Dealer</span>
            </div>)}
        </div>
    )
}