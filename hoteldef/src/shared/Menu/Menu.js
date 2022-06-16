import './Menu.css'

import { Link, NavLink } from "react-router-dom";


export function Menu(){


    return(


        <nav className="navbar navbar-expand-lg fondo navbar-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to='/'>Hotel</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to='/'>Home</NavLink>
                    </li>
                </ul>
                </div>
            </div>
        </nav>


    )



}