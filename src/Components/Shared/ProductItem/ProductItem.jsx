import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ProductItem.css'

// Home page single service item components

const ProductItem = (props) => {
    // take data using props 
    const { _id, place, img, location, days, price } = props.service;

    return (
        <Col>
            {/* single service card */}
            <Card className="card">
                <Card.Img variant="top" src={img} className="card-img" />
                <Card.Body>
                    <Card.Title className="">{place}</Card.Title>
                    <h5 className="text-info"><span className="fw-bold">Location:</span> {location}</h5>
                    <div className="d-flex justify-content-between">
                        <p><span className="fw-bold">Days:</span> {days}</p>
                        <p><span className="fw-bold">Cost:</span> ${price}/Person</p>
                    </div>
                    <Link to={`/service/${_id}`}>
                        <Button variant="info"> See Details </Button>
                    </Link>
                </Card.Body>
            </Card>
        </Col >
    );
};

export default ProductItem;