/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import SelfPortrait from './Assets/selfportrait.svg';


const About = () => (
    <>
        <img alt="" src={SelfPortrait} />
        <div className="AboutCard">
            <Card variant="outlined">
                <CardContent>
                    <h6>
                   Hi! My name is Brandon Yum. I am a 23-year old currently and self-teaching myself full-stack web development.
                   This website, that I made from scratch using React and Material UI, is an introduction to me.
                    </h6>
                </CardContent>
            </Card>
        </div>

    </>
);

export default About;
