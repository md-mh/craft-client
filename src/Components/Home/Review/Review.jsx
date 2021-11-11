import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ReviewItem from './ReviewItem';


const Review = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://stormy-fjord-37446.herokuapp.com/review/')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);

    console.log(reviews.length);
    return (
        <Container className="my-5 py-3">
            <h1 className="text-center py-3">Choose Our <span className="text-primary">Craft Items</span></h1>
            {/* Bootstrap responsive row */}
            <Row xs={1} md={2} lg={3} className="g-4 py-4">
                {
                    // mappimg data from reviews 
                    reviews.map(service => <ReviewItem key={service._id} service={service}></ReviewItem>)
                }
            </Row>
        </Container>
    );
};


export default Review;