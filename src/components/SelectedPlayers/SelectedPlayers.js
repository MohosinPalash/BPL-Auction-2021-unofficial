import React from 'react';
import './SelectedPlayers.css'

const SelectedPlayers = (props) => {
    const { name, country, dp, role, salary } = props.player;
    return (
        <div className="Added-Players">
            <div>
                <img src={dp} alt="" />
            </div>
            <div>
                <p>
                <strong>{name}  </strong><small>({country})</small>
                <br />
                Salary: ${salary}
                </p>
                
            </div>

        </div>
    );
};

export default SelectedPlayers;