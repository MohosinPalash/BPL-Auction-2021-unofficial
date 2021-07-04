import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus} from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-bootstrap';
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
                {/* Bootstrap is added here */}
                <Button className="btn btn-success" onClick={()=> props.handleAddPlayer(props.player)}><FontAwesomeIcon icon={faUserPlus} /> Add {name}</Button>
            </div>
        </div>
    );
};

export default Players;