import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';



const Player = (props) => {
  console.log('Player', props)
  return (
    <div className='player'>
      <span className='player-name'>
      <button className="remove-player" onClick={ () => props.removePlayer(props.id)}>✖</button>
        {props.name}
      </span>
      <Counter score={props.score}/>
    </div>
  );
};

class Counter extends Component {
  // constructor() {
  //   super()
  //   this.state= {
  //     score: 0
  //   }
  // }

  //better syntax:
  state = {
    score: 0
  };

  incrementScore = () => {
    this.setState( prevState => {
      return {
        score: prevState.score + 1
      }});
  }

  decrementScore = () => {
    this.setState( prevState => {
      return {
        score: prevState.score - 1
      }});
  }

  

  render() {
    return (
    <div className='counter'>
        <button className='counter-action decrement' onClick={this.decrementScore}> - </button>
          <span className='counter-score'>{ this.state.score }</span>
        <button className='counter-action increment' onClick={this.incrementScore}> + </button>
      </div>
    )
  }
}


class App extends Component {

  state = {
    players: [
        {
          name: "Guil",
          score: 50,
          id:1
        },
        {
          name: "Treasure",
          score: 85,
          id:2
        },
        {
          name: "Ashley",
          score: 95,
          id:3
        },
        {
          name: "James",
          score: 80,
          id:4
        }
      ]
  }

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id )
      }
    })
  }

render() {
  return (
    <div className="scoreboard">

          <Header title='Scoreboard' totalPlayers={this.state.players.length} />
          {this.state.players.map(player => 
            <Player
             name={player.name} 
             id={player.id}
             score={player.score} 
             key={player.id.toString()} 
             removePlayer={this.handleRemovePlayer}
           />
           )}
    </div>
  );
};

  
}

export default App;