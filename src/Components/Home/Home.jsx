import React from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import Banner from './Banner/Banner';
import Blog from './Blog/Blog';
import Contact from './Contact/Contact';
import HomeProduct from './HomeProduct/HomeProduct';


// home Page 
const Home = () => {

    const { loading } = useAuth();
    if (loading) {
        return (
            <div className="spinner">
                <Spinner animation="grow" variant="primary" />
            </div>
        );
    } else {
        return (
            <>
                <Banner></Banner>
                <HomeProduct></HomeProduct>
                <Blog></Blog>
                <Contact></Contact>

            </>
        );
    }

};

export default Home;