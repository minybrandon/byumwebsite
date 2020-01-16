import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
    card: {
        backgroundColor: '#343a40',
        margin: 50,
    },
});

const NasaImageofDay = () => {
    const [data, setData] = useState({});
    const classes = useStyles();

    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=VdCmtGgvcCvXcHLIzCZadUDEoEpjOOAwhZzIIeca')
            .then((response) => {
                // handle success
                setData(response.data);
            })
            .catch((error) => {
                // handle error
                console.log(error);
            })
            .finally(() => {
                // always executed
            });
    }, []);

    const { url, title, explanation } = data;

    return (
        <>
            <div className="NasaTitle">
                <h1>{title}</h1>
            </div>

            <div className="ImageofDay">
                <img src={url} alt={title} />
            </div>
            <div className="NasaExplanation">
                <Card className={classes.card}>
                    <CardContent>
                        <p>
                            {explanation}
                        </p>
                    </CardContent>
                </Card>
            </div>
        </>
    );
};

export default NasaImageofDay;
