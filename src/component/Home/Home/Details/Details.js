import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';

const Details = () => {
    const [docDetails, setDocDetails] = useState([])
    const { Id } = useParams()
    useEffect(() => {
        fetch('/Service.json')
            .then(res => res.json())
            .then(data => setDocDetails(data.find(x => x.id === +Id)))
    }, [])
    return (
        <Container className="py-5 my-5">
            <div className="row">

                <div className="col-md-4">
                    <img src={docDetails.img} alt="" className="w-100" />
                </div>

                <div className="col-md-8 text-start">
                    <h3>DEPARTMENT:{docDetails?.name}</h3>
                    <p>Description:{docDetails?.description}</p>
                </div>

            </div>
        </Container>
    );
};

export default Details;