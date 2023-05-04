import React, {useContext, useState, useEffect} from "react";
import {DataContext} from "../../context/Dataprovider";
import {useParams} from "react-router-dom";
import {ProductoItem} from "./ProductoItem";


export const ProductoDetalles = () => {
    const value = useContext(DataContext);
    const addCarrito = value.addCarrito;
    const [productos] = value.productos;
    const [detalle, setDetalle] = useState([]);
    const params = useParams();
    let item = 0;
    useEffect(() => {
        productos.forEach(producto => {
            item = 0;
            if (producto.id === parseInt(params.id)) {
                setDetalle(producto);
            }
        });
    }, [params.id, productos]);


    return (
        <>
            {
                <div className="detalles">
                    <h2>{detalle.title}</h2>
                    <p className="price">${detalle.price}</p>
                    <button onClick={() => addCarrito(detalle.id)}> Añadir al carrito</button>
                    <img src={detalle.image} alt={detalle.title}/>
                    <div className="description">
                        <p><b>Description:</b> is simply dummy text of the printing and typesetting industry. Lorem
                            Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                            printer took a galley of type and scrambled it to make a type specimen book. <br/> <br/> is
                            simply dummy text of the printing and typesetting industry. Lorem
                            Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                            printer took a galley of type and scrambled it to make a type specimen book. </p>
                    </div>
                    <br/> <br/> <br/> <br/> <br/> <br/> <br/>
                </div>
            }
            <h2 className="relacionado">Productos Relacionados</h2>
            <div className="productos">
                {
                    Array.isArray(productos)
                        ?  productos.map((producto) => {
                            if ((detalle.category === producto.category) && (item < 6)) {
                                item++;
                                return <ProductoItem
                                    key={producto.id}
                                    id={producto.id}
                                    title={producto.title}
                                    price={producto.price}
                                    image={producto.image}
                                    category={producto.category}
                                    cantidad={producto.cantidad}
                                />
                            }
                        }) :   null }
            </div>
        </>
    )
};