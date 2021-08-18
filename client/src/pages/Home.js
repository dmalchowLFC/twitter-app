import React from "react";
import Nav from "../Nav"

function Home() {
    return (
        <div>
            <Nav />
            <h1>Home Page</h1>
            <hr></hr>
            <body className="container-fluid">
                <div className="row">
                    <div className="child1">
                        <text>Lorem Ipsum dolorem</text>
                    </div>
                    <div className="child2">
                        <img
                            className="home-image"
                            id="home-img"
                            alt="Cannot load"
                            src="/images/home_image.png"
                            height="500px"
                            width="300px"
                        />
                    </div>
                </div>
            </body >
        </div >
    )
}

export default Home