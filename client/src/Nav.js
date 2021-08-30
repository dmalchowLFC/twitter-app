import React from 'react';
import './App.css';
import { Link } from "react-router-dom";
import logo from "./images/David-logo2.png";

function Nav() {
    return (
        <nav className="navbar navbar-light text-dark navbar-expand-lg" id="navigation">
            <img className="navbar-brand" src={logo} />
            <button className="navbar-toggler" data-toggle="collapse" data-target="#theLinks">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="theLinks">
                <ul className="navbar-nav">
                    <Link to="/" className="nav-link">
                        <li className="navbar-item">Home</li>
                    </Link>
                    <Link to="/search" className="nav-link">
                        <li className="navbar-item">Search</li>
                    </Link>
                    <Link to="/favorites" className="nav-link">
                        <li className="navbar-item">Favorites</li>
                    </Link>
                </ul>
            </div >
        </nav >
    )
}

export default Nav