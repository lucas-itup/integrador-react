import React ,  {createContext, useState, useEffect} from "react";
import Data from "../Data"
export const DataContext = createContext();

export const DataProvider =  (props) => {
    const [productos, setProductos ] = useState([]);
    const [menu, setMenu ] = useState(false);
    const [carrito , setCarrito] = useState([]);
    const [total , setTotal] = useState(0);
    useEffect(() => {
        // Realiza la llamada a la API para obtener los productos
        fetch("https://rich-gray-bream-cuff.cyclic.app/data/datos")
            .then((response) => response.json())
            .then((data) => {
                setProductos(data);
            })
            .catch((error) => {
                console.error("Error al obtener productos desde la API:", error);
            });
    }, []);

    const addCarrito = (id) =>{
        const check = carrito.every(item =>{
            return item.id  !== id;
        });
        if(check){
            const data = productos.filter(producto => {
                return producto._id === id
            })
            setCarrito([...carrito , ...data])
            alert("El producto se ha añadido al carrito.")
        }else{
            alert("El producto ya se ha añadido al carrito.")
        }
    };

    useState(()=>{
        const dataCarrito = JSON.parse(localStorage.getItem('dataCarrito'));
        if (dataCarrito){
            setCarrito(dataCarrito)
        }
    } );

    useEffect(() =>{
        localStorage.setItem('dataCarrito' , JSON.stringify(carrito));
    } , [carrito]);

    useEffect(() => {
        const getTotal = () => {
            const res = carrito.reduce((prev,item ) => {
                return prev + (item.price * item.cantidad)
            } , 0);
            setTotal(res)
        };
        getTotal();
    } , [carrito]);

    const value = {
        productos : [productos],
        menu: [menu,setMenu],
        addCarrito : addCarrito,
        carrito : [carrito ,setCarrito],
        total : [total , setTotal]
    };

    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
};