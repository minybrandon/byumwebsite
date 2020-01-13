import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import './App.css';
import './Assets/selfportrait.css';
import CenteredTabs from './Tabs';
import About from './About';
import Home from './Home';
import Projects from './Projects';
import MyMusic from './MyMusic';
import NasaImageofDay from './NasaImageofDay';

function App() {
    return (
        <Router>


            <div className="Tabs">
                <CenteredTabs />
            </div>

            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/projects">
                    <Projects />
                </Route>
                <Route path="/mymusic">
                    <MyMusic />
                </Route>
                <Route path="/nasaimageofday">
                    <NasaImageofDay />
                </Route>

            </Switch>

        </Router>
    );
}

export default App;
