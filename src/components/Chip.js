import React, {useState} from 'react';
import {chipColor} from '../utils/functions.js'

export default function Chip(props) {
    const {betOption, chipAction} = props

    return (
        <div
            className={`chip ${chipColor(betOption)}`}
            onClick={chipAction}
        >
            <span>{betOption}</span>
        </div>
    )
}