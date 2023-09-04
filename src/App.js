// import React, { useState } from 'react';
// import './App.css';
// import History from './components/Carousel/Tabs/History/History';
// import Team from './components/Carousel/Tabs/Team/Team';
// // import HistoryLogo from './path-to-history-logo.png'; // Replace with your actual path
// // import DefaultLogo from './path-to-default-logo.png';  // Replace with your actual path
// import hero from "./assets/images/hero.jpg"
// import HistoryLogo from "./assets/images/logo1.png"



// function App() {
//   const [activeTab, setActiveTab] = useState(null);

//   const handleHistoryClick = () => {
//     setActiveTab('history');
//   }

//   const handleTeamClick = () => {
//     setActiveTab('team');
//   }

//   return (
//     <div 
//       className="App"
//       style={{
//         backgroundImage: activeTab === 'history' ? 'url(E:\projects\my-task\src\assets\images\peak.jpg)' : activeTab === 'team' ? 'url(path-to-team-background.jpg)' : 'url(path-to-default-background.jpg)'  // Update paths
//       }}
//     >
//       <header className="App-header" style={{
//         backgroundColor: activeTab ? 'white' : 'rgba(255, 255, 255, 0.5)'  // Opaque when no tab is active, white otherwise
//       }}>
//         <div 
//         className="logo"
//         >
//           {/* <img src={activeTab === 'history' ? HistoryLogo : activeTab=== 'team'? : hero} alt="logo" /> */}
//           <img src={activeTab === 'history' ? HistoryLogo : (activeTab === 'team' ? "" : hero)} alt="logo" />

//         </div>
//         <nav>
//           <ul>
//             <li onClick={handleHistoryClick}>01. History</li>
//             <li onClick={handleTeamClick}>02. Team</li>
//           </ul>
//         </nav>
//       </header>
//       {activeTab === 'history' ? <History /> : null}
//       {activeTab === 'team' ? <Team /> : null}
//     </div>
//   );
// }

// export default App;







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
