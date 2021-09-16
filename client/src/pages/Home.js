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
                        <h2>Welcome to my mock Twitter App!</h2>
                            <text>This app allows you to search through Twitter and view recent tweets from your favorite users without having to create your own account. You may just want to see what Twitter is like, what kind of content people or organizations are posting, or simply have a look around without having to log into an account. In order to do this, please go to my search page and search for people by their username. Usernames are a bit finicky, so if it isn't spelled correctly or the name isn't what you thought it might be, just give it another go. For example: One of my favorite actors is Ryan Reynolds. You'd think a guy this popular would have the username ryanreynolds, right?! However, that's not the case. His username is vancityreynolds! You'll find a few of my favorite Twitter accounts and their recent tweets on the Favorites Page as well. Enjoy!!
                                
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