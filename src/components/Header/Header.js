import React from 'react';
import logo from '../../logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="logo-title">
                <img src={logo} alt="" />
                <h1>BPL Auction 2021</h1>
            </div>
            
            <nav>
                <a href="/allPlayers">All Players</a>
                <a href="/myPlayers">My Players</a>
                <a href="/fixture">Fixture</a>
                <a href="/result">Result</a>
                <a href="/gallery">Gallery</a>
            </nav>
        </div>
    );
};

export default Header;