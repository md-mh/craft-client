import React, { useEffect, useState, useRef } from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from './../../Hooks/useAuth'


// Place Order page Components 
const PlaceOrder = () => {

    const { id } = useParams();
    const [serviceDetails, setServiceDetails] = useState([]);
    useEffect(
        () => {
            fetch(`https://pure-plains-81807.herokuapp.com/show/${id}`)
                .then(res => res.json())
                .then(data => setServiceDetails(data))
        }, []);

    const { user } = useAuth();

    const mobileRef = useRef();
    const membersRef = useRef();
    const addressRef = useRef();

    const handleOrder = e => {
        e.preventDefault();
        const place = serviceDetails?.place;
        const email = user.email;
        const name = user.displayName;
        const mobile = mobileRef.current.value;
        const members = membersRef.current.value;
        const address = addressRef.current.value;
        const status = "Pending";

        const newOrder = { name, email, place, mobile, members, address, status };

        fetch('https://pure-plains-81807.herokuapp.com/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newOrder)
        })
        alert('Successfully added your Order.');
        e.target.reset();

    }

    return (

        <>
            <Container>
                <Row className="justify-content-center my-5">
                    <h1 className="text-center mb-5">Place your Order</h1>
                    <Col md={6}>
                        <Form onSubmit={handleOrder}>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Mobile Number</Form.Label>
                                <Form.Control type="number" placeholder="Write your Mobile number" ref={mobileRef} required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Members</Form.Label>
                                <Form.Control type="number" placeholder="Numbers of Member" ref={membersRef} required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Address</Form.Label>
                                <Form.Control as="textarea" placeholder="Write your address" style={{ height: '100px' }} ref={addressRef} />
                            </Form.Group>
                            <Button variant="info" type="submit" >Travel Now</Button>
                        </Form>
                    </Col>
                    <Col md={1}></Col>
                    <Col md={5}>
                        <br /><br />
                        <p><span className="fw-bold">Name:</span> {user.displayName}</p>
                        <p><span className="fw-bold">Email:</span> {user.email}</p>
                        <p><span className="fw-bold">Place:</span> {serviceDetails?.place}</p>
                        <p><span className="fw-bold">Location:</span> {serviceDetails?.location}</p>
                        <p><span className="fw-bold">Days:</span> {serviceDetails?.days}</p>
                        <p><span className="fw-bold">Cost:</span> ${serviceDetails?.price}/Person</p>

                    </Col>

                </Row>
            </Container>
        </>
    );
};

export default PlaceOrder;