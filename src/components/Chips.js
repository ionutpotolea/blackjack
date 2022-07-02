import React from 'react';

export default function Chips(props){
    const {gameState, setGameState} = props
    
    function placeBet(bet){
        setGameState(prevState => ({
            ...prevState,
            bet: bet
        }))
    }
    return (
        <div className='chips'>
            <div
                className='chip chip-black'
                onClick={() => placeBet(1)}
            >
                <span>1</span>
            </div>
            <div
                className='chip chip-blue'
                onClick={() => placeBet(5)}
            >
                <span>5</span>
            </div>
            <div
                className='chip chip-green'
                onClick={() => placeBet(10)}
            >
                <span>10</span>
            </div>
            <div
                className='chip chip-yellow'
                onClick={() => placeBet(50)}
            >
                <span>50</span>
            </div>
            <div
                className='chip chip-red'
                onClick={() => placeBet(100)}
            >
                <span>100</span>
            </div>
        </div>
    )
}