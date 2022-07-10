import React, {useEffect} from 'react'
import Chip from './Chip'

export default function Chips(props){
    const {gameState, setGameState} = props
    useEffect(() => {
        if (gameState.availableBetOptions){
            setGameState(prevState => ({
                ...prevState,
                availableBetOptions: prevState.availableBetOptions.filter(betOption => {
                    return betOption <= prevState.currentBalance
                })
            }))
        }
    // eslint-disable-next-line
    }, [gameState.currentBalance])

    function placeBet(bet){
        setGameState(prevState => ({
            ...prevState,
            bet: bet
        }))
    }

    function renderChips(){
        return gameState.availableBetOptions.map((betOption, index) => {
            return betOption !== gameState.bet ? (
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
        <div>
            {
                gameState.availableBetOptions && 
                <div className='chips'>
                    {renderChips()}
                </div>
            }
        </div>
        
    )
}