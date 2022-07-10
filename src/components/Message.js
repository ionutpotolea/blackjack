import React from "react"
import darkgrayRibbon from '../assets/images/ribbon-banner-darkgray.png'
import blueRibbon from '../assets/images/ribbon-banner-blue.png'
import greenRibbon from '../assets/images/ribbon-banner-green.png'
import orangeRibbon from '../assets/images/ribbon-banner-orange.png'

export default function Message(props){
    const {message, color, delayed} = props

    function ribbonColor(color){
        if (color === "darkgray") return darkgrayRibbon
        if (color === "blue") return blueRibbon
        if (color === "green") return greenRibbon
        if (color === "orange") return orangeRibbon
        else return darkgrayRibbon
    }

    return (
        <div className={`message ${delayed? 'message-delayed': ''}`}>
            <span className="message-text">{message}</span>
            <img
                src={ribbonColor(color)}
                alt=""
                className="message-ribbon"
            />
        </div>
    )
}