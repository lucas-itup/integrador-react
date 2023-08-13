import React , {useContext} from "react";
import { DataContext} from "../../context/Dataprovider";
import {ProductoItem} from "./ProductoItem";

export const ProductosLista = () => {
    const value = useContext(DataContext);
    const [productos] = value.productos;
    return (
        <>
            <h1 className="title">PRODUCTOS</h1>
            <div className="productos">
                {
                    Array.isArray(productos)
                        ?  productos.map((producto) =>
                        <ProductoItem
                            key={producto._id}
                            id={producto._id}
                            title={producto.title}
                            price={producto.price}
                            image={producto.image}
                            category={producto.category}
                            cantidad={producto.cantidad}
                        />
                    ) :   null }
            </div>
        </>
    )
};