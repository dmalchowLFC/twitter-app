import React from "react"

const MockData = () => {
    return (
        <div>
            <div className="card border-secondary w-50 mx-auto bg-light">
                <div>
                    <img
                        className="thumbnail img-responsive rounded-circle"
                        alt="Cannot load"
                        src="https://placeimg.com/50/50/people"
                        height="50px"
                        width="50px" />
                    <h3 className="d-inline-block">Random User : </h3>
                    <h5 className="d-inline-block">@RandomUsername</h5>
                </div>
                <div className="card-body">
                    <h1>Random user tweet text</h1>
                    <span>8:00  </span>
                    <span>Jan 1, 2020  </span>
                    <span>Twitter Web App</span>
                </div>
            </div>
            <div className="card border-secondary w-50 mx-auto bg-light">
                <div>
                    <img
                        className="thumbnail img-responsive rounded-circle"
                        alt="Cannot load"
                        src="https://placeimg.com/50/50/animals"
                        height="50px"
                        width="50px" />
                    <h3 className="d-inline-block">Random User : </h3>
                    <h5 className="d-inline-block">@RandomUsername</h5>
                </div>
                <div className="card-body">
                    <h1>Random user tweet text</h1>
                    <span>8:00  </span>
                    <span>Jan 1, 2020  </span>
                    <span>Twitter Web App</span>
                </div>
            </div>
            <div className="card border-secondary w-50 mx-auto bg-light">
                <div>
                    <img
                        className="thumbnail img-responsive rounded-circle"
                        alt="Cannot load"
                        src="https://placeimg.com/50/50/nature"
                        height="50px"
                        width="50px" />
                    <h3 className="d-inline-block">Random User : </h3>
                    <h5 className="d-inline-block">@RandomUsername</h5>
                </div>
                <div className="card-body">
                    <h1>Random user tweet text</h1>
                    <span>8:00  </span>
                    <span>Jan 1, 2020  </span>
                    <span>Twitter Web App</span>
                </div>
            </div>
        </div>
    )
}

export default MockData