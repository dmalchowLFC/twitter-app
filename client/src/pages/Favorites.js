import React from "react";
import Nav from "../Nav";
import MockData from "./MockData"


function Favorites() {
    return (
        <div>
            <Nav />
            <body style={{ backgroundColor: "lightblue" }}>
                <h1 class="text-center">Favorites Page</h1>
                <MockData />
            </body>
        </div>
    )
}

export default Favorites;