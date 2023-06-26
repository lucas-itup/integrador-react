import React from 'react';
import '../../App.css'
import {Link} from "react-router-dom";
export const Viewlogin = () => {
    return (
        <div className="App-login">
            <div className="login-container">
                <h1>Login</h1>
                <form>
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <button>Login</button>
                </form>
                <p className="register-text">Si no tienes una cuenta, regístrate   <Link to="/registro">aqui</Link></p>
            </div>
        </div>
    );
}