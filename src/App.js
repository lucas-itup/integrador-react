import React, { useState } from 'react';
import {Header} from "./componentes/Header";
import {BrowserRouter as Router} from "react-router-dom";
import 'boxicons';
import {Paginas} from "./componentes/Paginas"
import {DataProvider} from "./context/Dataprovider"
import {Carrito} from "./componentes/Carrito";
import {Footer} from "./componentes/Footer";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(fab);

function App() {
    let storedIsLoggedIn = false;
    if (localStorage.getItem('isLoggedIn') === 'true'){
        storedIsLoggedIn = true
    }
    const [isLoggedIn, setIsLoggedIn] = useState(storedIsLoggedIn);
    return (
        <DataProvider>
            <div className="App">
                <Router>
                    <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
                    <Carrito/>
                    <Paginas/>
                    <Footer/>
                </Router>
            </div>
        </DataProvider>
    );
}

export default App;
