import React, { Component } from 'react';
import './App.css';
import GameBoard from './components/GameBoard/GameBoard';
import ColorPicker from './components/ColorPicker/ColorPicker';
import GameTimer from './components/GameTimer/GameTimer';
import NewGameButton from './components/NewGameButton/NewGameButton';

const colors = ['#7CCCE5', '#FDE47F', '#E04644', '#B576AD'];


class App extends Component {
  constructor(){
    super();
    // this.state holds all state properties for this component
    this.state = {
      selColorIdx: 0
    };
  }
  
  render() {
    return (
      <div className="App">
            Selected color: {colors[this.state.selColorIdx]}
        <header className="App-header">React Mastermind</header>
        <div className="flex-h">
          <GameBoard />
          <div>
            <ColorPicker />
            <GameTimer />
            <NewGameButton />
          </div>
        </div>
        <footer className="component">footer</footer>
      </div>
    );
  }
}

export default App;