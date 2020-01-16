/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import Grid from '@material-ui/core/Grid';

const MyMusic = () => (
    <Grid container spacing={10} className="MusicGrid">
        <Grid item>
            <iframe src="https://open.spotify.com/embed/playlist/0pLon0TeYcWimMYJWXL5rP" width="300" height="380" frameBorder="0" allowTransparency="true" allow="encrypted-media" />
        </Grid>
        <Grid item>
            <iframe src="https://open.spotify.com/embed/playlist/3Zh4KT8lnjRb2opt71mG35" width="300" height="380" frameBorder="0" allowTransparency="true" allow="encrypted-media" />
        </Grid>
        <Grid item>
            <iframe src="https://open.spotify.com/embed/playlist/3662OcoS4z5dpYBaKiWyH2" width="300" height="380" frameBorder="0" allowTransparency="true" allow="encrypted-media" />
        </Grid>
    </Grid>
);

export default MyMusic;
