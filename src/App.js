import React, { useState } from 'react';
import {Switch, Route} from "react-router-dom"
import './App.css';
import OpeningScreen from './components/OpeningScreen.js';
import PlayGame from './components/PlayGame.js';


function App() {
  const [gameState, setGameState] = useState({
    started: false,
    balance: 1000,
    bet: 0,
    roundStarted: false
  })
  return (
    <Switch>
      <Route exact path='/'>
        <OpeningScreen setGameState={setGameState}/>
      </Route>
      <Route path='/play-game'>
        <PlayGame setGameState={setGameState} gameState={gameState}/>
      </Route>
    </Switch>
  )
}

export default App;
