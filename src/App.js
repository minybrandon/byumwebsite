import React from 'react';
import './App.css';
import SelfPortrait from '../src/Assets/selfportrait.svg';
import '../src/Assets/selfportrait.css'
import SimpleTabs from './Tabs.js'

function App() {
  return (
    <>
    
    <div className="Tabs">
      <SimpleTabs/>
    </div>

    <div className="Main">
      <header className="Main-header">
        <img alt='' src={SelfPortrait} />
        <p>
          Brandon Yum : Full-Stack Developer 
          Hello World!
        </p>
        <a
          className="App-link"
          href="https://www.nasa.gov/"
          target="_blank"
          rel="noopener noreferrer"
        >
          One small step for man.
        </a>
      </header>
    </div>
    
    </>
  );
}

export default App;
