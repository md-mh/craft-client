import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ProductItem from '../Shared/ProductItem/ProductItem';

// Home page services component  

const Products = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://stormy-fjord-37446.herokuapp.com/product/')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    console.log(services.length);
    return (
        <Container className="my-5 py-3">
            <h1 className="text-center py-3">Choose Our <span className="text-primary">Craft Items</span></h1>
            {/* Bootstrap responsive row */}
            <Row xs={1} md={2} lg={3} className="g-4 py-4">
                {
                    // mappimg data from services 
                    services.map(service => <ProductItem key={service._id} service={service}></ProductItem>)
                }
            </Row>
        </Container>
    );
};

export default Products;