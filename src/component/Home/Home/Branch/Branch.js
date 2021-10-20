import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const Branch = () => {
    return (
        <div className="py-5">
            <Container>
                <h1 style={{fontSize:"4rem"}} className=" pb-3 text-center">Our Goal in Future</h1>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <img src="https://www.postdicom.com/Images/BlogPosts/SocialMediaImages/medical-imaging-science-and-applications-social.jpg" alt="" className="w-100" />
                    </div>
                    <div className="col-12 col-md-6 text-start">
                        <h2>title here</h2>
                        <p>The candidates bearing the following Roll Numbers have been provisionally selected for admission to 1st year MBBS class (BM-31) of session 2016-2017 subject to medical fitness and submission of original SSC and HSC/O level and A level certificates, mark sheets, testimonials, equivalence certificate, Admit Card, and 4 (Four) recent passport size photo. If there is any false information in the admission documents, the admission will be cancelled at
                        any time.admission to 1st year MBBS class (BM-31) of session 2016-2017 subject to medical fitness and submission of original SSC and HSC/O level and A level certificates, mark sheets, testimonials, equivalence certificate, Admit Card, and 4 (Four) recent passport size photo. If there is any false information in the admission documents, the admission will be can</p>
                        <Button>Read more</Button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Branch;