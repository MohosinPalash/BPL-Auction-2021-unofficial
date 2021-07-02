import React from 'react';
import './Players.css'

const Players = (props) => {
    const { name, country, dp, role, salary } = props.player;
    // console.log(props.player);
    return (
        <div className="player-info">
            <div className="dp">
                <img  src={dp} alt="" />
            </div>
            <div className="info">
                <h1><span className="player-name">{name}</span> <span className="country-name">({country})</span></h1>
                <p><strong>Role: </strong>{role}</p>
                <p><strong>Salary: </strong>${salary}</p>
                <button onClick={()=> props.handleAddPlayer(props.player)}>Add {name}</button>
            </div>


        </div>
    );
};

export default Players;