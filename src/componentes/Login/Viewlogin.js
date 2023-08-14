import React, { useState } from 'react';
import '../../App.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Viewlogin = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para controlar si el usuario está logeado

    const handleLogin = async () => {
        try {
            // Realiza la validación de los campos
            if (username && password) {
                const response = await axios.post('https://rich-gray-bream-cuff.cyclic.app/auth/login', { username, password }, {
                    withCredentials: true
                });

                if (response.status === 200) {
                    localStorage.setItem('isLoggedIn', true);
                    console.log(response)
                    // Redirige al usuario a la página deseada después de iniciar sesión
                    navigate('/');
                }
            }else{
                setError('Credenciales incorrectas. Por favor, verifica tu nombre de usuario y contraseña.');
            }
        } catch (error) {
            console.error('Error de inicio de sesión:', error.response ? error.response.data : error.message);
            setError('Credenciales incorrectas. Por favor, verifica tu nombre de usuario y contraseña.');
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
                    <button type="button" onClick={handleLogin}>Login</button>
                    {error && <p className="error-message">{error}</p>}
                </form>
                <p className="register-text">
                    Si no tienes una cuenta, regístrate <Link to="/registro">aquí</Link>
                </p>
            </div>
        </div>
    );
};
