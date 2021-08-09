import React from "react";
import Nav from "../Nav"

function Home() {
    return (
        <div>
            <Nav />
            <h1>Home Page</h1>
            <body className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 mw-50 mh-100">
                        <text>Lorem Ipsum dolorem</text>
                    </div>
                    <div className="col-lg-6 mw-50 mh-100">
                        <img
                            className="float-right"
                            alt="Cannot load"
                            src="https://placeimg.com/300/500/tech"
                            height="500px"
                            width="300px"
                        ></img>
                    </div>
                </div>
            </body >
        </div >
    )
}

export default Home