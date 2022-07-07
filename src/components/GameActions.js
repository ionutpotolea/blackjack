import React from 'react'
import Chip from './Chip'
import handIcon from '../assets/icons/hand-solid.svg'
import addCardIcon from '../assets/icons/square-plus-solid.svg'

export default function GameActions(props){
    const {gameState, setGameState} = props

    function hit(){
        if(!gameState.roundEnded){
            fetch('https://blackjack.fuzz.me.uk/turn', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                  },
                body: `action=hit&sessionId=${gameState.sessionId}`
            })
            .then(res => res.json())
            .then(data => { 
                const {dealerCards, playerCard} = data
                setGameState(prevState => ({
                    ...prevState,
                    dealerCards: [...prevState.dealerCards, dealerCards],
                    playerCards: [...prevState.playerCards, playerCard],
                    ...data
                }))
            })
            .catch(err => console.error(err))
        }
    }

    function double(){
        if(!gameState.roundEnded){
            fetch('https://blackjack.fuzz.me.uk/turn', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                  },
                body: `action=double&sessionId=${gameState.sessionId}`
            })
            .then(res => res.json())
            .then(data => { 
                const {dealerCards, playerCard} = data
                setGameState(prevState => ({
                    ...prevState,
                    bet: prevState.bet*2,
                    dealerCards: [...prevState.dealerCards, dealerCards],
                    playerCards: [...prevState.playerCards, playerCard],
                    ...data
                }))
            })
            .catch(err => console.error(err))
        }
    }

    function stay(){
        if(!gameState.roundEnded){
            fetch('https://blackjack.fuzz.me.uk/turn', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                  },
                body: `action=stay&sessionId=${gameState.sessionId}`
            })
            .then(res => res.json())
            .then(data => { 
                const {dealerCards} = data
                setGameState(prevState => ({
                    ...prevState,
                    dealerCards: [...prevState.dealerCards, dealerCards],
                    ...data
                }))
            })
            .catch(err => console.error(err))
        }
    }

    function repeatBet(){
        console.log(gameState)
    }

    function newBet(){
        console.log(gameState)
    }

    function cashOut(){
        console.log(gameState)
    }

    return (
        <div className='game-actions-container'>
            {!gameState.roundEnded && (
                <div className='game-actions'>
                    <Chip
                        betOption={gameState.bet}
                        gameState={gameState}
                        staked={true}
                    />
                <div className='game-action-buttons'>
                    <button
                        className='btn btn-game-action btn-hit'
                        onClick={hit}
                    >
                        <img src={addCardIcon} alt=""/>
                        <span>Hit</span>
                    </button>
                    <button
                        className='btn btn-game-action btn-double'
                        onClick={double}
                    >
                        <span className='top-text'>Double</span>
                        <span className='bottom-text'>X2</span>
                    </button>
                    <button
                        className='btn btn-game-action btn-stand'
                        onClick={stay}
                    >
                        <img src={handIcon} alt=""/>
                        <span>Stay</span>
                    </button>
                </div>
            </div>
            )}
            {gameState.roundEnded && (
                <div className='game-action-buttons'>
                    <button
                        className='btn btn-game-action'
                        onClick={repeatBet}
                    >
                        Repeat last bet
                    </button>
                    <button
                        className='btn btn-game-action'
                        onClick={newBet}
                    >
                        New bet
                    </button>
                    <button
                        className='btn btn-game-action'
                        onClick={cashOut}
                    >
                        Cash out
                    </button>
                </div>
            )}
        </div>
    )
}