import React, {useContext} from "react";
import Card from "../../images/img03.jpg"
import {DataContext} from "../../context/Dataprovider";

export const Carrito = () => {
    const value = useContext(DataContext);
    const [ menu, setMenu] = value.menu;
    const [carrito , setCarrito] = value.carrito;
    const  [total] = value.total;

    const toggleFalse = () =>{
        setMenu(false);
    }

    const show1 = menu ? "carritos show" : "carritos";
    const show2 = menu ? "carrito show" : "carrito";

    const resta = id =>{
        carrito.forEach(item =>{
            if (item.id === id){
                item.cantidad === 1 ? item.cantidad = 1 : item.cantidad -=1
            }
            setCarrito([...carrito])
        })
    };

    const suma = id =>{
        console.log(id);
        carrito.forEach(item =>{
            if (item.id === id){
               item.cantidad += 1;
            }
            setCarrito([...carrito])
        })
    };



    const removeProducto = id => {
        if (window.confirm("Quieres eliminar el producto?")){
            carrito.forEach((item, index) => {
                if (item.id === id){
                    item.cantidad = 1;
                    carrito.splice(index , 1)
                }
                setCarrito([...carrito]);
            });

        }
    };

   /* const comprar = () => {
        if (window.confirm("Quieres finalizar la compra ?")){
            localStorage.removeItem("dataCarrito");
            alert("Compra realizada con exito!");
           window.location.reload();
        }
    };*/
    const comprar = async () => {
        if (window.confirm('Quieres finalizar la compra?')) {
            try {
                const response = await fetch('https://rich-gray-bream-cuff.cyclic.app/cart/add', {
                    method: 'POST',
                    headers: {
                        Authorization: `Bearer ` + localStorage.getItem('token'), // Reemplaza con el token JWT válido
                        'Content-Type': 'application/json',
                        body: JSON.stringify({ carrito }), // Enviar el carrito como parte del cuerpo

                    },
                });

                if (response.ok) {
                    localStorage.removeItem('dataCarrito');
                    alert('Compra realizada con éxito!');
                    window.location.reload();
                } else {
                    console.error('Error al finalizar la compra');
                }
            } catch (error) {
                console.error('Error en la solicitud:', error);
            }
        }
    };


    return (
        <div className={show1}>
            <div className={show2}>
                <br/><br/><br/> <br/><br/><br/>
                <div className="carrito__close" onClick={toggleFalse}>
                    <box-icon name="x"></box-icon>
                </div>

                <h2>Su carrito</h2>
                <div className="carrito__center">
                    {
                        carrito.length === 0 ? <h2 style={{
                            textAlign: "center", fontSize: "3rem"
                        }}> Carrito Vacio</h2> : <>
                            {
                                carrito.map((producto) => (
                                    <div className="carrito__item" key={producto.id}>
                                        <img src={producto.image} alt=""/>
                                        <div>
                                            <h3>{producto.title}</h3>
                                            <p className="price">${producto.price}</p>
                                        </div>
                                        <div>
                                            <box-icon name="up-arrow" onClick={() => suma(producto.id)} type="solid">

                                            </box-icon>
                                            <p className="cantidad">{producto.cantidad}</p>
                                            <box-icon name="down-arrow" onClick={() => resta(producto.id)} type="solid">

                                            </box-icon>
                                        </div>
                                        <div className="remove__item" onClick={() => removeProducto(producto.id)}>
                                            <box-icon name="trash"></box-icon>
                                        </div>
                                    </div>
                                ))
                            }
                        </>
                    }
                </div>
                <div className="carrito__footer">
                    <h3>Total: ${total}</h3>
                    <button onClick={() => comprar()} className="btn">Comprar</button>
                </div>
            </div>
        </div>
    )
};