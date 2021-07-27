import React from "react";
import Nav from "../Nav";


function Favorites() {
    return (
        <div>
            <Nav />
            <h1>Favorites Page</h1>
            <div class="card border-secondary w-50 mx-auto">
                <div>
                    <img
                        class="thumbnail img-responsive rounded-circle"
                        alt="Cannot load"
                        src="https://placeimg.com/50/50/people"
                        height="50px"
                        width="50px" />
                    <h3 class="d-inline-block">Random User : </h3>
                    <h5 class="d-inline-block">@RandomUsername</h5>
                </div>
                <div class="card-body">
                    <h1>Random user tweet text</h1>
                    <span>8:00  </span>
                    <span>Jan 1, 2020  </span>
                    <span>Twitter Web App</span>
                </div>
            </div>
            <div class="card border-secondary w-50 mx-auto">
                <div>
                    <img
                        class="thumbnail img-responsive rounded-circle"
                        alt="Cannot load"
                        src="https://placeimg.com/50/50/animals"
                        height="50px"
                        width="50px" />
                    <h3 class="d-inline-block">Random User : </h3>
                    <h5 class="d-inline-block">@RandomUsername</h5>
                </div>
                <div class="card-body">
                    <h1>Random user tweet text</h1>
                    <span>8:00  </span>
                    <span>Jan 1, 2020  </span>
                    <span>Twitter Web App</span>
                </div>
            </div>
            <div class="card border-secondary w-50 mx-auto">
                <div>
                    <img
                        class="thumbnail img-responsive rounded-circle"
                        alt="Cannot load"
                        src="https://placeimg.com/50/50/nature"
                        height="50px"
                        width="50px" />
                    <h3 class="d-inline-block">Random User : </h3>
                    <h5 class="d-inline-block">@RandomUsername</h5>
                </div>
                <div class="card-body">
                    <h1>Random user tweet text</h1>
                    <span>8:00  </span>
                    <span>Jan 1, 2020  </span>
                    <span>Twitter Web App</span>
                </div>
            </div>
        </div>
    )
}

export default Favorites;