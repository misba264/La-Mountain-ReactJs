

import React, {useState} from 'react';
import './App.css';
// import Carousel from './components/Carousel/Carousel';
import History from './components/Carousel/Tabs/History/History';
import Team from './components/Carousel/Tabs/Team/Team';
import Header from './components/Header/Header';

function App() {
  const [activeTab, setActiveTab] = useState(null);

  const handleHistoryClick = () => {
    setActiveTab('history');
  }

  const handleTeamClick = () => {
    setActiveTab('team');
  }

  return (
    <div  className="App" >
    <Header 
                activeTab={activeTab} 
                onHistoryClick={handleHistoryClick} 
                onTeamClick={handleTeamClick} 
            />
    
    {activeTab=== "history" ? <History />:activeTab=== "team" ? <Team/> : null}
  </div>

);
  
}

export default App;
