import React from 'react';
import { Container } from 'react-bootstrap';
import { Carousel } from '@trendyol-js/react-carousel';


// Home page Blog Component 

const Blog = () => {
    return (
        <Container className="my-5 py-3">
            <Carousel show={2.5} slide={3} swiping={true}>
                <div className="mx-2"><img src={"https://i.ibb.co/47pygQr/footer.png"} alt="" /></div>
                <div className="mx-2"><img src={"https://i.ibb.co/47pygQr/footer.png"} alt="" /></div>
                <div className="mx-2"><img src={"https://i.ibb.co/47pygQr/footer.png"} alt="" /></div>
                <div className="mx-2"><img src={"https://i.ibb.co/47pygQr/footer.png"} alt="" /></div>
            </Carousel>
        </Container>
    );
};

export default Blog;