import React from 'react';
import Typical from 'react-typical';


const Home = () => (
    <>
        <div className="Intro">
            <h1>Brandon Yum</h1>
        </div>
        <div className="SelfType">
            <Typical
                steps={['Web Developer', 3000, 'Artist', 3000, 'Good son', 3000]}
                loop={Infinity}
                wrapper="p"
            />
        </div>
    </>
);

export default Home;
