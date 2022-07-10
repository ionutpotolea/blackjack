import React from 'react'
import Card from './Card'
import Message from './Message'
import {analyzeCards} from '../utils/utils.js'

export default function Cards(props){
    const {gameState, owner} = props
    const [totalSum, hasBlackJack] = analyzeCards(gameState[owner])
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
                        message={
                            `${hasBlackJack ? "BlackJack!" :
                            gameState.winAmount < 0 ? "Dealer wins" : "Bust"}`
                        }
                        color={gameState.winAmount < 0 ? "blue" : "darkgray"}
                        delayed={gameState.winAmount < 0 ? false : true}
                    />
                )
            } else if (owner === 'playerCards'){
                return (
                    <Message
                        message={
                            `${hasBlackJack ? "BlackJack!" : 
                            gameState.winAmount > 0 ? "You win" : "Bust"}`
                        }
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
                <span className='sum-of-cards-number'>{totalSum}</span>
                <span className='sum-of-cards-label'>{owner === 'dealerCards' ? 'Dealer' : 'Player'}</span>
            </div>

            {renderMessage(owner)}
        </div>
    )
}