import React from "react";
import Nav from "../Nav"
import logo from "../images/home-image2.png";



function Home() {
    return (
        <div>
            <Nav />
            <h1>Home Page</h1>
            <hr></hr>
            <body className="container-fluid">
                <div className="row">
                    <div className="child1">
                        <text>Welcome to my Twitter App! 
                            
                        </text>
                    </div>
                    <div className="child2">
                        <img
                            className="home-image"
                            id="home-img"
                            src={logo}
                            alt="Cannot load"
                        />
                    </div>
                </div>
            </body >
        </div >
    )
}

export default Home