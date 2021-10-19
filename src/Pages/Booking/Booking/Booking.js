import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();

    const [serviceDetails, setServiceDetails] = useState([])

    useEffect(() => {
        fetch('/Service.json')
            .then(res => res.json())
            .then(data => setServiceDetails(data))
    }, [])

    const foundDetails = serviceDetails.find(singleService => singleService.id === Number(serviceId))


    return (
        <div>
            <div class="card text-center">

                <div class="card-header">
                    <img src={foundDetails?.img} alt="" />
                </div>

                <div class="card-body">
                    <h5 class="card-title">Department Name: {foundDetails?.name} </h5>

                    <p class="card-text"><span className="fw-bold">Description:</span> {foundDetails?.description}</p>

                    <button className="btn btn-regular bg-info">Confirm Now</button>

                </div>

            </div>
        </div>
    );
};

export default Booking;