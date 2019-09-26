import React, { useState } from 'react';
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

const Counter = () => {

 const [score, setScore] = useState(0)

    return (
    <div className='counter'>
        <button className='counter-action decrement' onClick={e=>setScore(score - 1)}> - </button>
          <span className='counter-score'>{score}</span>
        <button className='counter-action increment' onClick={e=>setScore(score+1)}> + </button>
      </div>
    )
  }



function App () {

  const[players, setPlayers] = useState(
      [
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
    ])
   
  
  const handleRemovePlayer = (id) => setPlayers.filter(player => player.id !== id )



  return (
    <div className="scoreboard">

          <Header title='Scoreboard' totalPlayers={players.length} />
          {players.map(player => 
            <Player
             name={player.name} 
             id={player.id}
             score={player.score} 
             key={player.id.toString()} 
             removePlayer={handleRemovePlayer}
           />
           )}
    </div>
  );
 };


export default App;