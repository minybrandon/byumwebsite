import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Joke = () => {
    const [joke, setJoke] = useState({ });
    const [showPunchline, setshowPunchline] = useState(false);

    const getJoke = () => {
        axios.get('https://official-joke-api.appspot.com/random_joke')
            .then((response) => {
                // handle success
                setJoke(response.data);
            })
            .catch((error) => {
                // handle error
                console.log(error);
            })
            .finally(() => {
                // always executed
            });
    };

    const onClickHandler = () => setshowPunchline(true);
    const onSetupClickHandler = () => {
        setshowPunchline(false);
        getJoke();
    };

    useEffect(getJoke, []);

    const { setup, punchline } = joke;

    return (
        <>
            <p onClick={onClickHandler}>{setup}</p>
            <p>{showPunchline && punchline}</p>

            <button onClick={onSetupClickHandler}>
                New Joke
            </button>
        </>
    );
};

export default Jokes