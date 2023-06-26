import React from "react";
import { Routes , Route} from  "react-router-dom"
import {Inicio} from   "./Inicio"
import {ProductosLista} from "./Productos";
import {ProductoDetalles} from "./Productos/ProductoDetalles";
import {Viewlogin} from "./Login/Viewlogin";
import {Registro} from "./Registro/Registro";

export const Paginas = () => {
    return (
       <section>
           <Routes>
               <Route path="/"  element={<Inicio/>}/>
               <Route path="/productos"  element={<ProductosLista/>} />
               <Route path="/login"  element={<Viewlogin/>} />
               <Route path="/registro"  element={<Registro/>} />
               <Route path="/producto/:id"  element={<ProductoDetalles/>} />
           </Routes>
       </section>
    )
};

export default Paginas