import React from 'react';
import { Button } from 'react-bootstrap';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Account.css';

const Sociallogin = () => {
    const { signInUsingGoogle } = useAuth();

    // handle login redirect 
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';


    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }

    return (
        <div>
            <br /><h5>Social Login</h5><br />

            {/* Social button  */}

            <Button variant="light" onClick={handleGoogleLogin}><AiFillGoogleCircle />    Google sign In</Button>

        </div>
    );
};

export default Sociallogin;