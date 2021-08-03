import React from 'react'
import './App.css'
import { Link } from "react-router-dom"

function Nav() {
    return (
        <nav class="navbar navbar-dark text-light navbar-expand-lg">
            <h2 class="navbar-brand">Logo</h2>
            <button class="navbar-toggler" data-toggle="collapse" data-target="#theLinks">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="theLinks">
                <ul class="navbar-nav">
                    <Link to="/" class="nav-link">
                        <li class="navbar-item">Home</li>
                    </Link>
                    <Link to="/search" class="nav-link">
                        <li class="navbar-item">Search</li>
                    </Link>
                    <Link to="/favorites" class="nav-link">
                        <li class="navbar-item">Favorites</li>
                    </Link>
                </ul>
            </div >
        </nav >
    )
}

export default Nav