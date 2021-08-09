import React from "react";
import Nav from "../Nav";
import MockData from "./MockData"


function Favorites() {
    return (
        <div>
            <Nav />
            <body>
                <h1 className="text-center">Favorites Page</h1>
                <MockData />
            </body>
        </div>
    )
}

export default Favorites;