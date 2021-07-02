import React, { useState, useEffect } from 'react';
import Players from '../Players/Players'
import Budget from '../Budget/Budget'
import './SelectionArea.css'
import PlayersInfo from '../../FakeData/PlayersInfo.json';

const SelectionArea = () => {

    const [players, setPlayers] = useState([]);
    const [count, setCount] = useState([]);

    const handleAddPlayer = (players) =>{
        const newCount = [...count, players];
        setCount(newCount);
        console.log(count);
    }

    useEffect(() => {


        setPlayers(PlayersInfo);
        // console.log(PlayersInfo);
        console.log(players);
    }, [players]);
    return (
        <div className='selection-field'>
            <div className='players-field'>
                {
                    players.map(plr => <Players 
                        player={plr}
                        handleAddPlayer = {handleAddPlayer}
                        ></Players>)
                }
                
            </div>
            <div className='budget-field'>
                <Budget count={count}></Budget>
            </div>
        </div>
    );
};

export default SelectionArea;