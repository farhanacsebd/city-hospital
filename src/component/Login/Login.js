import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const { handleEmail, handlePass, error, loggIn, handleGoogleSign } = useAuth()
    return (
        <Container>
            <div className="w-50 mx-auto">
                <div className="py-5 text-start">
                    <div>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onClick={handleEmail} type="email" placeholder="Enter email" />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onClick={handlePass} type="password" placeholder="Password" />
                        </Form.Group>

                        <button onClick={loggIn} className="bg-warning text-white rounded py-2 px-3 border-0">Login</button>
                        <Button onClick={handleGoogleSign} className="btn btn-primary mx-3 py-2 px-2" variant="warning" type="button">
                            Sign In Google
                        </Button>
                        <p>{error}</p>
                        <Link to="/sign">New user?</Link>

                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Login;