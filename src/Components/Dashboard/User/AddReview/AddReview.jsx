import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';

const AddReview = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        axios.post('https://stormy-fjord-37446.herokuapp.com/review/', data)
        alert('Add Product Successfully');
        reset();
    }
    return (
        <Container>
            <Row className="justify-content-center">
                <Col md={10}>
                    <h2 className="text-center">Add a Review</h2>
                    <Form onSubmit={handleSubmit(onSubmit)}>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Your Comment</Form.Label>
                            <Form.Control as="textarea" {...register("comment")} placeholder="Write Your Comment" style={{ height: '150px' }} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Rating</Form.Label>
                            <Form.Control type="number" {...register("rating")} placeholder="Rating" min="1" max="5" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>

                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default AddReview;