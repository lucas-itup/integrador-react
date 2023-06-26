import React from 'react';
import '../../App.css'
import {Link} from "react-router-dom";
export const Registro = () => {
    return (
        <div className="App-login">
            <div className="login-container">
                <h1>Registro</h1>
                <form>
                    <input type="text" placeholder="Nombre" />
                    <input type="text" placeholder="Apellido" />
                    <input type="email" placeholder="Correo Electrónico" />
                    <input type="tel" placeholder="Teléfono" />
                    <button>Aceptar</button>
                </form>
                <p className="register-text">Si ya tienes una cuenta, <Link to="/login">Acceder</Link></p>
            </div>
        </div>
    );
}