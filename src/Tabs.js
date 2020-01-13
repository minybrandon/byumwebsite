import React from 'react';
import { Link } from 'react-router-dom';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export default function CenteredTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (

        <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            indicatorColor="black"
            textColor="primary"
            centered
        >
            <Tab label="Home" component={Link} to="/" />
            <Tab label="About" component={Link} to="/about" />
            <Tab label="Projects" component={Link} to="/projects" />
            <Tab label="My Music" component={Link} to="/mymusic" />
            <Tab label="Nasa Image of Day" component={Link} to="/nasaimageofday" />
        </Tabs>

    );
}
