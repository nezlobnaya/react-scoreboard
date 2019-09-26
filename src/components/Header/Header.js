import React from 'react';
import '../../App.css';

export default function Header(props) {
    console.log('Header', props);
    return (
        <header>
            <h1>{props.title}</h1>
            <span className='stats'>Players: {props.totalPlayers}</span>
        </header>
    )
}