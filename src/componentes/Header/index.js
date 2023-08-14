import React, { useContext, useState, useEffect } from 'react';
import Logo from "../../images/Logo-Punto-blue.jpg"
import {DataContext} from "../../context/Dataprovider";
import { Link, useNavigate } from 'react-router-dom';
export const Header = ({  setIsLoggedIn }) => {
    const value = useContext(DataContext);
    const [menu, setMenu] = value.menu;
    const [carrito] = value.carrito;
    const navigate = useNavigate();
    const toggleMenu = () => {
        setMenu(!menu);
    };
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
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

                {/* Condicionalmente renderiza el botón de cierre de sesión o el enlace de inicio de sesión */}
                {isLoggedIn ? (
                    <li>
                        <Link onClick={handleLogout}>Cerrar sesión</Link>
                    </li>
                ) : (
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                )}
            </ul>
            {isLoggedIn ? (
                <div className="cart" onClick={toggleMenu}>
                    <box-icon name="cart"></box-icon>
                    <span className="item__total">{carrito.length}</span>
                </div>
            ) : ( ""
            )}
        </header>
    )
};