import React from 'react';
import Chip from './Chip'

export default function CurrentBet(props){
    const {gameState, setGameState} = props

    function removeBet(){
        console.log("bet removed!")
        setGameState(prevState => ({
            ...prevState,
            bet: 0
        }))
    }

    return (
        <div className='current-bet'>
            {gameState.bet!==0 &&
            <Chip
                betOption={gameState.bet}
                setGameState={setGameState}
                gameState={gameState}
                chipAction={removeBet}
            />}
        </div>
    )
}