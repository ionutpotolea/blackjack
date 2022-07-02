import React from 'react';

export default function CurrentBet(props){
    const {gameState, setGameState} = props

    function displayChip(bet){
        function chipColor(bet){
            return bet === 1 ? 'chip-black' :
                bet === 5 ? 'chip-blue' :
                bet === 10 ? 'chip-green' :
                bet === 50 ? 'chip-yellow' :
                bet === 100 ? 'chip-red' : 'chip-gray'
        }
        if (bet) return (
            <div
                className={`chip ${chipColor(bet)}`}
                onClick={() => removeBet()}
            >
                <span>{bet}</span>
            </div>
        )
    }

    function removeBet(){
        setGameState(prevState => ({
            ...prevState,
            bet: 0
        }))
    }

    return (
        <div className='current-bet'>{displayChip(gameState.bet)}</div>
    )
}