import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Form } from 'react-bootstrap';
import { Link} from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const {handleEmail,handlePass,error,loggIn} = useAuth()
    return (
        <Container>
            <div className="w-50 mx-auto">
            <div>
                <img src="https://image.freepik.com/free-vector/red-heart-with-heartbeat-line-medical-background_1017-26835.jpg" alt="" />
            </div>
            <div className="py-5">
                <div>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onClick={handleEmail} type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onClick={handlePass} type="password" placeholder="Password" />
                    </Form.Group>

                    <button onClick={loggIn} className="bg-warning rounded py-2 px-3 border-0">Login</button>
                    <Link to="/sign">New user?</Link>
                    <p>{error}</p>
                </div>
            </div>
            </div>
        </Container>
    );
};

export default Login;