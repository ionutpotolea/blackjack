import React from 'react'
import {chipColor} from '../utils/functions.js'

export default function Chip(props) {
    const {betOption, chipAction, gameState} = props

    return (
        <div
            className={`chip ${chipColor(betOption)} ${!gameState.roundStarted ? "chip-unlocked" : ""}`}
            onClick={chipAction}
        >
            <span>{betOption}</span>
        </div>
    )
}