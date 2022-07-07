import React from 'react'
import {chipColor} from '../utils/functions.js'

export default function Chip(props) {
    const {betOption, gameState, chipAction, staked} = props

    return (
        <div className='chip-container'>
            <div
                className={`chip ${chipColor(betOption)} ${!gameState.roundStarted ? "chip-unlocked" : "chip-locked"}`}
                onClick={chipAction}
            >
                <span className='chip-amount'>{betOption}</span>
            </div>
                {staked && <span className='current-bet-amount'>${gameState.bet}</span>}
        </div>
    )
}