import React from 'react';
import './card.style.css';
export const Card= props => (
    <div className="card-container">

        <img alt="monsters" src={`https://robohash.org/${props.monster.id}?set=set2`}></img>
        <h1> {props.monster.name} </h1>
        <div> {props.monster.email}</div>
    </div>
);