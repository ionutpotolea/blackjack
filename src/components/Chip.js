import React from 'react'
import {chipColor} from '../utils/utils.js'

export default function Chip(props) {
    const {betOption, gameState, chipAction, staked} = props

    return (
        <div className='chip-container'>
            <div
                className={`chip ${chipColor(betOption)} ${!gameState.roundStarted ? "chip-unlocked" : "chip-locked"}`}
                onClick={chipAction}
            >
                {
                    gameState.double &&
                    <span className='chip-amount double'>2x</span>
                }
                <span className='chip-amount'>{betOption}</span>
            </div>
                {staked && <span className='current-bet-amount'>${gameState.double? 2*gameState.bet : gameState.bet}</span>}
        </div>
    )
}