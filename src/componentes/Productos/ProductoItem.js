import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {DataContext} from "../../context/Dataprovider";

export const ProductoItem = ({key, id, title, price, image, category, cantidad}) => {

    const value = useContext(DataContext);
    const addCarrito = value.addCarrito;
    return (
        <div className="producto">
            <Link to={`/producto/${id}`}>
                <div className="producto__img">
                    <img src={image} alt=""/>
                </div>
            </Link>
            <div className="producto__footer">
                <h1>{title}</h1>
                <p>{category}</p>
                <p className="price">${price}</p>
            </div>
            <div className="buttom">
                <button onClick={() => addCarrito(id)} className="btn">
                    Añadir al carrito
                </button>
                <div>
                    <Link to={`/producto/${id}`} className="btn">Ver</Link>
                </div>
            </div>
        </div>
    )
};