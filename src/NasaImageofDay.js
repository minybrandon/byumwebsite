import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NasaImageofDay = () => {
    const [data, setData] = useState({});

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
                <p>
                    {explanation}
                </p>
            </div>
        </>
    );
};

export default NasaImageofDay;
