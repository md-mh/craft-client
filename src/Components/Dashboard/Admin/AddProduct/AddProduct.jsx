import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';


// Add a Place page Components 
const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        axios.post('http://localhost:5000/show', data)
        alert('Add Place Successfully');
        reset();
    }
    return (
        <Container>
            <Row className="justify-content-center my-5">
                <Col md={8}>
                    <h1>Add a Place</h1>
                    <Form onSubmit={handleSubmit(onSubmit)}>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Write a Travel Place</Form.Label>
                            <Form.Control type="text" {...register("place")} placeholder="Write a Travel Place" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Traveling Place Location</Form.Label>
                            <Form.Control type="text" {...register("location")} placeholder="Traveling Place Location" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Traveling days</Form.Label>
                            <Form.Control type="number" {...register("days")} placeholder="Traveling days" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Travel Cost</Form.Label>
                            <Form.Control type="number" {...register("price")} placeholder="Travel Cost ($)" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Details</Form.Label>
                            <Form.Control as="textarea" {...register("details")} placeholder="Write a details about this Place" style={{ height: '150px' }} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Cover image url</Form.Label>
                            <Form.Control type="url"  {...register("img")} placeholder="Cover image url" />
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

export default AddProduct;