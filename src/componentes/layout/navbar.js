import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (

        <div>

            <nav className="navbar  mb-2 navbar-expand-lg navbar-dark bg-primary">
                <Link to={'/propiedades'} className="navbar-brand">
                    Inicio
                </Link>
                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav mr-auto">

                        <li className="nav-item">
                            <Link to={'/propiedades/nuevo'} className="nav-link">
                                Nueva propiedad test
                            </Link>
                        </li>


                    </ul>

                </div>
            </nav>
        </div>
    );
}
export default Navbar;