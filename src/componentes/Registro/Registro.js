import React, { useState } from 'react';
import '../../App.css'
import { Link, useNavigate } from 'react-router-dom';
export const Registro = () => {
    const navigate = useNavigate();
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');

    const handleAceptar = () => {
        // Realiza la validación de los campos
        if (nombre && apellido && email && telefono) {
            // Redirige al usuario a la página deseada
            navigate('/');
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
                    <button onClick={handleAceptar}>Aceptar</button>
                </form>
                <p className="register-text">
                    Si ya tienes una cuenta, <Link to="/login">Acceder</Link>
                </p>
            </div>
        </div>
    );
};