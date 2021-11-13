import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ProductItem.css'

// Single Product item components

const ProductItem = (props) => {
    // take data using props 
    const { _id, title, img, price, details } = props.service;

    return (
        <Col>
            {/* single service card */}
            <Card className="card">
                <Card.Img variant="top" src={img} className="card-img" />
                <Card.Body>
                    <Card.Title className="">{title}</Card.Title>
                    <p><span className="fw-bold">Details:</span> {details.slice(0, 200)}</p>
                    <Card.Footer className="d-flex justify-content-between align-items-center">
                        <span><span className="fw-bold">Cost:</span> {price}tk</span>
                        <Link to={`/placeOrder/${_id}`}> <Button variant="info"> Buy now </Button> </Link>
                    </Card.Footer>

                </Card.Body>
            </Card>
        </Col >
    );
};

export default ProductItem;