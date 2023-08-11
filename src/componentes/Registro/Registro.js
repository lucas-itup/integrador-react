import React, { useState } from 'react';
import '../../App.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Registro = () => {
    const navigate = useNavigate();
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const handleAceptar = async () => {
        try {
            // Realiza la validación de los campos
            if (nombre && apellido && email && telefono && usuario && password) {
                const response = await axios.post('https://rich-gray-bream-cuff.cyclic.app/auth/register', {
                    nombre,
                    apellido,
                    email,
                    telefono,
                    username: usuario,
                    password,
                });

                if (response.status === 201) {

                    // Redirige al usuario a la página deseada después del registro exitoso
                    navigate('/login');
                }
            }
        } catch (error) {
            console.error('Error de Registro:', error.response ? error.response.data : error.message);
            setError('Error de Registro: ' + error.response ? error.response.data : error.message);
            // Aquí puedes mostrar un mensaje de error al usuario si lo deseas
        }
    };

    return (
        <div className="App-login">
            <div className="login-container">
                <h1>Registro</h1>
                <form>
                    <input
                        required
                        type="text"
                        placeholder="Nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                    <input
                        required
                        type="text"
                        placeholder="Apellido"
                        value={apellido}
                        onChange={(e) => setApellido(e.target.value)}
                    />
                    <input
                        required
                        type="email"
                        placeholder="Correo Electrónico"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        required
                        type="tel"
                        placeholder="Teléfono"
                        value={telefono}
                        onChange={(e) => setTelefono(e.target.value)}
                    />
                    <input
                        required
                        type="text"
                        placeholder="Usuario"
                        value={usuario}
                        onChange={(e) => setUsuario(e.target.value)}
                    />
                    <input
                        required
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="button" onClick={handleAceptar}>Aceptar</button>
                    {error && <p className="error-message">{error}</p>}
                </form>
                <p className="register-text">
                    Si ya tienes una cuenta, <Link to="/login">Acceder</Link>
                </p>
            </div>
        </div>
    );
};
