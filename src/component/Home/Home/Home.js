import React from 'react';
import Banner from '../Banner/Banner';
import Covid from '../Banner/Covi';
import Stuff from '../Stuff/Stuff';
import Branch from './Branch/Branch';
import Doctors from './Doctors/Doctors';

const Home = () => {

    return (
        <div>
            <Banner />
            <Covid></Covid>
            <Doctors />
            <Branch />
            <Stuff />
        </div>
    );
};

export default Home;