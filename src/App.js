import React from 'react';
import {Switch, Route} from "react-router-dom"
import './App.css';
import OpeningScreen from './components/OpeningScreen.js';
import PlayGame from './components/PlayGame.js';


function App() {
  const [gameState, setGameState] = React.useState({started: false})
  console.log(gameState.started)
  return (
    <Switch>
      <Route exact path='/'>
        <OpeningScreen setGameState={setGameState}/>
      </Route>
      <Route path='/PlayGame'>
        <PlayGame/>
      </Route>
    </Switch>
  )
}

export default App;
