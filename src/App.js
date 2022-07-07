import React, { useState } from 'react';
import {Switch, Route} from "react-router-dom"
import './App.css';
import OpeningScreen from './components/OpeningScreen.js';
import PlayGame from './components/PlayGame.js';


function App() {
  const [gameState, setGameState] = useState({
    gameStarted: false,
    currentBalance: 1000,
    bet: 0,
    roundStarted: false,
    roundEnded: false
  })
  console.log(gameState)
  return (
    <Switch>
      <Route exact path='/blackjack'>
        <OpeningScreen setGameState={setGameState}/>
      </Route>
      <Route path='/blackjack/play-game'>
        <PlayGame setGameState={setGameState} gameState={gameState}/>
      </Route>
    </Switch>
  )
}

export default App;
