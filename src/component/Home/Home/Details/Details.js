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

                <div className="col-md-8 text-start">
                    <h3>{docDetails?.name}</h3>
                    <p>To move a dead body from one place to another place, the freezing van or freezing ambulance is used for that. In this case, the dead body is kept at the temperature of the filling ambulance (-5%) so that there is no smell from the dead body easily and the body is free from virus and virus free.ody from one place to another place, the freezing van or freezing ambulance is used for that. In this case, the dead body is kept at the temperature of the filling ambulance (-5%) so that there is no smell from th</p>
                    <p>Call {docDetails?.call}</p>
                    <p>Duty time : {docDetails?.time}</p>
                </div>
                <div className="col-md-4">
                    <img src={docDetails.img} alt="" className="w-100" />
                </div>
            </div>
        </Container>
    );
};

export default Details;