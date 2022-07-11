import React, {useState} from "react"
import {Link, useHistory} from "react-router-dom"
import logo from '../assets/images/logo.png'

export default function AddFunds(props){
    const {gameState, setGameState} = props
    const [formData, setFormData] = useState({
        newFunds: 50
    })
    let history = useHistory();

    function startGame(){
        setGameState(prevState => ({
            ...prevState,
            gameStarted: true
        }))
    }

    function handleChange(event){
        const {name, value} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: +value
            }
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        setGameState(prevState => ({
            ...prevState,
            winAmount: 0,
            currentBalance: prevState.currentBalance + formData.newFunds
        }))
        history.push("/blackjack/play-game");
    }

    return (
        <div className='add-funds-container'>
            <img src={logo} className="logo" alt="game logo" />
            <form
                className="add-funds-form"
                onSubmit={handleSubmit}
            >
                <input
                    className="add-funds-input"
                    type="number"
                    name="newFunds"
                    min="0"
                    max={1000-gameState.currentBalance}
                    onChange={handleChange}
                    value={formData.newFunds}
                />
                <button
                    type="submit"
                    className="btn add-funds-btn"
                >
                    Add Funds
                </button>
            </form>
            <Link
                to="/blackjack/play-game"
                className='btn btn-primary'
                onClick={startGame}
            >
                Play
            </Link>
        </div>
    )
}