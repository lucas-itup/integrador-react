import React, { useContext, useState } from 'react';
import Logo from "../../images/Logo-Punto-blue.jpg"
import {DataContext} from "../../context/Dataprovider";
import { Link, useNavigate } from 'react-router-dom';
export const Header = () => {
    const value = useContext(DataContext);
    const [menu, setMenu] = value.menu;
    const [carrito] = value.carrito;
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para controlar si el usuario está logeado
    const navigate = useNavigate();
    const toggleMenu = () => {
        setMenu(!menu);
    };

    const handleLogin = () => {
        const username = ''; // Obtener el valor del nombre de usuario desde el formulario
        const password = '';
        // Realiza la validación de los campos
        if (username && password) {
            setIsLoggedIn(true);
            // Redirige al usuario a la página deseada después de iniciar sesión
            navigate('/');
        }
    };

    const handleLogout = () => {
        // Realiza las acciones necesarias para cerrar sesión
        // ...

        // Actualiza el estado isLoggedIn a false
        setIsLoggedIn(false);

        // Redirige al usuario a la página de inicio de sesión
        navigate('/login');
    };
    return (
        <header>
            <Link to="/">
                <div className="logo">
                    <img src={Logo} alt="logo" width="150"/>
                </div>
            </Link>
            <ul>
                <li>
                    <Link to="/">INICIO</Link>
                </li>
                <li>
                    <Link to="/productos">Productos</Link>
                </li>

                {isLoggedIn ? (
                    <li>
                        <button onClick={handleLogout}>Cerrar sesión</button>
                    </li>
                ) : (
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                )}
            </ul>
            <div className="cart" onClick={toggleMenu}>
                <box-icon name="cart"></box-icon>
                <span className="item__total">{carrito.length}</span>
            </div>
        </header>
    )
};