import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'

const Register = () => {
    return (
        <div className="form">
            <div>
                <form onSubmit="">
                    <div>
                        <h2>Create A New Account</h2>
                    </div>
                    <div className="name">
                        <input type="text" placeholder="enter your name" required />
                    </div>
                    <div className="email">
                        <input type="email" placeholder="enter your email" required />
                    </div>
                    <div className="pass">
                        <input type="password" placeholder="your strong password" required />
                    </div>
                    <div className="re-pass">
                        <input type="password" placeholder="re-enter your strong password" required />
                    </div>
                    <div className="submit">
                        <input className="button" type="submit" value="Submit" />
                    </div>
                </form>
                <div>
                    <p>Already Have a Account ? <Link to="/login">Login Now</Link> </p>
                </div>
                <div>
                    <p>---------Or---------</p>
                </div>
                <div>
                    <button className="button">Sign-up Google</button>
                </div>
            </div>
        </div>
    );
};

export default Register;