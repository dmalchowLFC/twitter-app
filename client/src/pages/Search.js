import React from "react";

const Search = (props) => {
    return (
        <div>
            <nav className="navbar navbar-dark navbar-expand-lg fixed-top">
                <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="navbar-item">
                            <a href="pages/Home.js">Home</a>
                        </li>
                        <li className="navbar-item">
                            <a href="pages/Search.js">Search</a>
                        </li>
                        <li className="./navbar-item">
                            <a href="./pages/Favorites.js">Favorites</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <label>Search for a Twitter User: </label>
            <input placeholder="Input username here"></input>
        </div>
    )
}

export default Search