import React, { useState } from 'react';
import {Switch, Route} from "react-router-dom"
import './App.css';
import OpeningScreen from './components/OpeningScreen.js';
import PlayGame from './components/PlayGame.js';
import EndGame from './components/EndGame.js';
import AddFunds from './components/AddFunds.js';


function App() {
  const [gameState, setGameState] = useState({
    gameStarted: false,
    currentBalance: 1000,
    availableBetOptions: [],
    bet: 0,
    winAmount: 0,
    double: false,
    doubleAvailable: true,
    roundStarted: false,
    roundEnded: false
  })

  return (
    <Switch>
      <Route exact path='/blackjack'>
        <OpeningScreen setGameState={setGameState}/>
      </Route>
      <Route path='/blackjack/play-game'>
        <PlayGame setGameState={setGameState} gameState={gameState}/>
      </Route>
      <Route path='/blackjack/end-game'>
        <EndGame setGameState={setGameState} gameState={gameState}/>
      </Route>
      <Route path='/blackjack/add-funds'>
        <AddFunds setGameState={setGameState} gameState={gameState}/>
      </Route>
    </Switch>
  )
}

export default App;
