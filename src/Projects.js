import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import sangstagram from './Assets/sangstagram.svg';

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
        margin: 50,
    },
    media: {
        height: 140,
    },
});

export default function Projects() {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={sangstagram}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Sangstagram
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Sangstagram is an Instagram-clone 
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="medium" color="primary" target="_blank" href="http://sangstagram-live.firebaseapp.com">
          View
                </Button>
            </CardActions>
        </Card>
    );
}
