import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/UseAuth';
import './Login.css';

const Login = () => {
    const { signIngoogle } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect_url = location.state?.from || "/";
    const handleGoogleSign = () => {
        signIngoogle()
            .then((result) => {
                history.push(redirect_url);
            })
    }
    return (
        <div className="form">
            <div>
                <form onSubmit="">
                    <div>
                        <h2>Login Now</h2>
                    </div>
                    <div className="email">
                        <input type="email" placeholder="enter your email" required />
                    </div>
                    <div className="pass">
                        <input type="password" placeholder="******" required />
                    </div>
                    <div className="submit">
                        <input className="button" type="submit" value="Submit" />
                    </div>
                </form>
                <div>
                    <p>New To Ema Jhon Shop ? <Link to="/register">Create Account</Link> </p>
                </div>
                <div>
                    <p>---------Or---------</p>
                </div>
                <div>
                    <button className="button" onClick={handleGoogleSign}>Sign Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;