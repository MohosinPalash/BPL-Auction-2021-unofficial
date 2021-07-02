import React from 'react';
import SelectedPlayers from '../SelectedPlayers/SelectedPlayers';

const Budget = (props) => {
    const player = props.count;
    const { name, country, dp, role, salary} = player;
    let totalSalary = 0;
    for (let i = 0; i < player.length; i++) {
        const p = player[i];
        totalSalary += p.salary;
    }
    return (
        <div>
            <h3>Selected Players</h3>
            <p>No of Players: {props.count.length}</p>
            <p>Total Spend: $ {totalSalary}</p>
            {
                player.map(plr => <SelectedPlayers player ={plr}></SelectedPlayers>)
            }
        </div>
    );
};

export default Budget;