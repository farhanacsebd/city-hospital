import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Covid from '../Banner/Covi';
import Stuff from '../Stuff/Stuff';
import Branch from './Branch/Branch';
import Doctors from './Doctors/Doctors';

const Home = () => {
    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        fetch('./Service.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
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