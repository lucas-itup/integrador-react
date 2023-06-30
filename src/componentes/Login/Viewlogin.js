import React, { useState } from 'react';
import '../../App.css';
import { Link, useNavigate } from 'react-router-dom';

export const Viewlogin = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Realiza la validación de los campos
        if (username && password) {
            // Redirige al usuario a la página deseada después de iniciar sesión
            navigate('/');
        }
    };

    return (
        <div className="App-login">
            <div className="login-container">
                <h1>Login</h1>
                <form>
                    <input
                        required
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        required
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button onClick={handleLogin}>Login</button>
                </form>
                <p className="register-text">
                    Si no tienes una cuenta, regístrate <Link to="/registro">aquí</Link>
                </p>
            </div>
        </div>
    );
};
