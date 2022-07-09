import React from 'react'
import Card from './Card'
import Message from './Message'
import {calculateCardsSum} from '../utils/functions.js'

export default function Cards(props){
    const {gameState, owner} = props
    function renderCards(){
        if (gameState[owner].length === 1){
            const renderedCards = [...gameState[owner]]
            renderedCards.unshift({suite: 'back-side', rank: ''})
            return renderedCards.map((card, index) => (<Card
                key={index}
                card={card}
            />))
        } else {
            return gameState[owner].map((card, index) => (<Card
                key={index}
                card={card}
            />))
        }
    }

    function renderMessage(owner){
        if (gameState.roundEnded){
            if (owner === 'dealerCards'){
                return (
                    <Message
                        message={`Dealer ${gameState.winAmount < 0 ? "wins" : "loses"}`}
                        color={gameState.winAmount < 0 ? "blue" : "darkgray"}
                        delayed={gameState.winAmount < 0 ? false : true}
                    />
                )
            } else if (owner === 'playerCards'){
                return (
                    <Message
                        message={`You ${gameState.winAmount > 0 ? "win" : "lose"}`}
                        color={gameState.winAmount > 0 ? "orange" : "darkgray"}
                        delayed={gameState.winAmount > 0 ? false : true}
                    />
                )
            }
        }
    }
    
    return (
        <div className={owner}>
            <div className='cards-container'>
                {renderCards()}
            </div>
            
            <div className='sum-of-cards'>
                <span className='sum-of-cards-number'>{calculateCardsSum(gameState[owner])}</span>
                <span className='sum-of-cards-label'>{owner === 'dealerCards' ? 'Dealer' : 'Player'}</span>
            </div>

            {renderMessage(owner)}
        </div>
    )
}