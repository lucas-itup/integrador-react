import React , {useContext} from "react";
import Logo from "../../images/Logo-Punto-blue.jpg"
import {Link} from "react-router-dom";
import {DataContext} from "../../context/Dataprovider";

export const Header = () => {
    const value = useContext(DataContext);
    const [menu, setMenu] = value.menu;
    const [carrito] = value.carrito;

    const toggleMenu = () =>{
        setMenu(!menu)
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
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
            <div className="cart" onClick={toggleMenu}>
                <box-icon name="cart"></box-icon>
                <span className="item__total">{carrito.length}</span>
            </div>
        </header>
    )
};