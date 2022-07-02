import React from 'react'
import Card from './Card'


export default function DealerCards(props){
    const {gameState} = props
    console.log("dealerCards", gameState.dealerCards)
    // const renderedDealerCards = gameState.dealerCards ? gameState.dealerCards.map(
    //     (card, index) => (
    //         <Card
    //             key={index}
    //             card={card}
    //         />
    //     )
    // ) : ""

    function renderDealerCards(){
        if(gameState.dealerCards){
            if (gameState.dealerCards.length === 1){
                const rendereddealerCards = [...gameState.dealerCards]
                rendereddealerCards.unshift({suite: 'back-side', rank: ''})
                return rendereddealerCards.map((card, index) => (<Card
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
            {renderDealerCards()}
        </div>
    )
}