import React, { useEffect, useState } from 'react';
import { Container, Carousel, Row, Col } from 'react-bootstrap';
import Rating from 'react-rating';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';


const Review = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://stormy-fjord-37446.herokuapp.com/review/')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);

    return (
        <Container className="my-5">
            <h1 className="text-center py-5">Customer <span className="text-primary">Reviews</span></h1>
            <Carousel variant="dark" indicators="false">
                {
                    // mappimg data from reviews 
                    reviews.map(service => <Carousel.Item key={service._id} service={service}>
                        <Row className="justify-content-center">
                            <Col md={7}>
                                <div className="text-center">
                                    <Rating className="p-2" initialRating={service.rating} fullSymbol={<AiFillStar />} emptySymbol={<AiOutlineStar />} readonly />
                                    <p>{service.comment}</p>
                                    <h4 className="text-end"> - {service.name}</h4>
                                    <br /><br />
                                </div>
                            </Col>
                        </Row>

                    </Carousel.Item>)
                }
            </Carousel>
        </Container>
    );
};


export default Review;