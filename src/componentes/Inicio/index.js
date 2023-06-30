import React from "react";
import Portada  from "../../images/drag-banner-10.jpg"
import {Link} from "react-router-dom";

export const Inicio = () => {
    return (
        <div className="inicio">
            <Link to="/">
                <img src={Portada} alt="portada"/>
            </Link>

        </div>
    )
};