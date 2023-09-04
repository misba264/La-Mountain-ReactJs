import React,{useState} from 'react';
import HistoryLogo from '../../assets/images/logo1.png'; 
import DefaultLogo from '../../assets/images/logo.png'; 
import "./Header.css"

const Header = ({ activeTab, onHistoryClick, onTeamClick }) => {

    const logo = activeTab === 'history' ? HistoryLogo : DefaultLogo;
    const bgColor = activeTab === 'history' ? 'white' : '';
        document.documentElement.style.setProperty('--header-bg-color', bgColor);
    
    if (activeTab === 'team') return null;

    return (
        <header className="header">  
        <img src={logo} alt="Logo" className='myimg'/>
        <nav >
                <ul className="nav-list">
                    <li onClick={onHistoryClick}>01 History</li>
                    <li onClick={onTeamClick}>02 Team</li>
                </ul>
        </nav>
    </header>
    );
};

export default Header;