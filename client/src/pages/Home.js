import React from "react";
import Nav from "../Nav"

function Home() {
    return (
        <div>
            <Nav />
            <h1>Home Page</h1>
            <body class="container-fluid">
                <div class="row">
                    <div class="col-lg-6 mw-50 mh-100">
                        <text>Lorem Ipsum dolorem</text>
                    </div>
                    <div class="col-lg-6 mw-50 mh-100">
                        <img
                            class="float-right"
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