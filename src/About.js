/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import SelfPortrait from './Assets/selfportrait.svg';

const About = () => (
    <>
        <img alt="" src={SelfPortrait} />
        <Card className="AboutCard" variant="outlined">
            <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                   Hi! My name is Brandon Yum. I am a 23-year old currently and self-teaching myself full-stack web development.
                   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
            </CardContent>
        </Card>
    </>
);

export default About;
