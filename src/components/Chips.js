import React, {useState} from 'react'
import Chip from './Chip'

export default function Chips(props){
    const {gameState, setGameState, gameData} = props
    
    function placeBet(bet){
        console.log("bet placed!")
        setGameState(prevState => ({
            ...prevState,
            bet: bet
        }))
    }

    function renderChips(){
        return gameData.availableBetOptions.map(betOption => {
            return gameState.bet !== betOption ? (<Chip
                key={betOption}
                betOption={betOption}
                setGameState={setGameState}
                gameState={gameState}
                chipAction={() => placeBet(betOption)}
            />) : ""
        })
    }
    
    return (
        <div className='chips'>
            {gameData.availableBetOptions && renderChips()}
        </div>
    )
}