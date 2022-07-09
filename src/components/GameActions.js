import React from 'react'
import {Link} from "react-router-dom"
import Chip from './Chip'
import handIcon from '../assets/icons/hand-solid.svg'
import newBetIcon from '../assets/icons/circle-plus-solid.svg'
import addCardIcon from '../assets/icons/square-plus-solid.svg'
import repeatBetIcon from '../assets/icons/arrow-rotate-right-solid.svg'
import dollarIcon from '../assets/icons/circe-dollar-sign-solid.svg'


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

    const resetState = {
        dealerCards: null,
        dealerCard: null,
        playerCards: null,
        playerCard: null,
        roundEnded: false,
        roundStarted: false,
        winAmount: 0
    }

    function repeatBet(){
        setGameState(prevState => ({
            ...prevState,
            ...resetState
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
                roundStarted: true,
                ...data
            }))
        })
        .catch(err => console.error(err))
    }

    function newBet(){
        setGameState(prevState => ({
            ...prevState,
            ...resetState,
            bet: 0,
        }))
    }

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
                    availableBetOptions: [],
                    bet: 0,
                    gameStarted: false,
                    sessionId: "",
                    ...data
                }))
            })
            .catch(err => console.error(err))
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
                        <img src={repeatBetIcon} alt=""/>
                        <span>Bet ${gameState.bet}</span>
                    </button>

                    <button
                        className='btn btn-game-action'
                        onClick={newBet}
                    >
                        <img src={newBetIcon} alt=""/>
                        <span>New bet</span>
                    </button>

                    <Link
                        to="/blackjack/end-game"
                        className='btn btn-game-action'
                        onClick={cashOut}
                    >
                        <img src={dollarIcon} alt=""/>
                        <span>Cash out</span>
                    </Link>
                </div>
            )}
        </div>
    )
}