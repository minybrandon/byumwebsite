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

            </Switch>

        </Router>
    );
}

export default App;
