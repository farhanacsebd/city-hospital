import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const Branch = () => {
    return (
        <div className="py-5">
            <Container>
                <h1 style={{ fontSize: "3rem" }} className=" pb-5 text-center text-info">Depertment & Facilities</h1>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <img src="https://v3u9z9k5.stackpathcdn.com/wp-content/uploads/2018/06/IMAGING_lowres.jpg" alt="" className="w-100" />
                    </div>
                    <div className="col-12 col-md-6 text-start">
                        <h3>Radiology & Imaging Services</h3>
                        <p>City Hospital Trust loves to take challenge to diagnosis the disease and offering treatment to the patient. We offer the best Radiology and imaging services to the patient with industry latest 3 Tesla MRI, Acquisition, Multi slice CT Scan, Digital 100 msH X Ray 4D Ultrasonography and others. We are the pioneer in 1.5 Tesla MRI and 128 Slice CT scan in Bangladesh. A group of well educated experienced consultants with European and North American degrees are working hard to verify the reports...</p>

                    </div>
                </div>
            </Container>
            <Container>
                <div className="row mt-4">
                    <div className="col-12 col-md-6 text-start">
                        <h3>Pain and Physiotherapy Center</h3>
                        <p>Pain is a protective symptom. It leads a patient to take medication and treatment. Our pain center is dedicated to care your pain and keeping you in comfort. We have renowned doctors, physiotherapists and world-class instruments for pain management and rehabilitation of the patients. We love to address all sort of pain and offer quality services to make our patients happy and smile. You are welcome to visit our pain and physiotherapy center.</p>

                    </div>

                    <div className="col-12 col-md-6">
                        <img src="https://www.postdicom.com/Images/BlogPosts/SocialMediaImages/medical-imaging-science-and-applications-social.jpg" alt="" className="w-100" />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Branch;