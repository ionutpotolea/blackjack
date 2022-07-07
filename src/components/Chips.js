import React from 'react'
import Chip from './Chip'

export default function Chips(props){
    const {gameState, setGameState} = props
    
    function placeBet(bet){
        setGameState(prevState => ({
            ...prevState,
            bet: bet
        }))
    }

    function renderChips(){
        return gameState.availableBetOptions.map((betOption, index) => {
            return gameState.bet !== betOption ? (
            <Chip
                key={index}
                betOption={betOption}
                gameState={gameState}
                chipAction={() => placeBet(betOption)}
                staked={false}
            />
            ) : ""
        })
    }
    
    return (
        <div className='chips'>
            {gameState.availableBetOptions && renderChips()}
        </div>
    )
}