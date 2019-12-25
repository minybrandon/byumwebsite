import React from 'react';
import SelfPortrait from '../src/Assets/selfportrait.svg';

const Home = () => {
    return(
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
    )
}

export default Home
