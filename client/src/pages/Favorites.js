import React from "react";
import Nav from "../Nav";
import axios from 'axios';

const axiosRequest1 = axios.get("api/favorite1?screen_name=LFC&count=1")
const axiosRequest2 = axios.get("api/favorite2?screen_name=wsl&count=1")
const axiosRequest3 = axios.get("api/favorite3?screen_name=VancityReynolds&count=1")

class Favorites extends React.Component {
    constructor() {
        super()
        this.state = {
            favorite1: [],
            favorite2: [],
            favorite3: []
        }
    }
    componentDidMount() {
        axios.all([axiosRequest1, axiosRequest2, axiosRequest3])
            .then(axios.spread(function (res1, res2, res3) {
                res1 => this.setState({ favorite1: res1 })
                res2 => this.setState({ favorite2: res2 })
                res3 => this.setState({ favorite3: res3 })
            }));
    }

    render() {
        return (
            <div>
                <Nav />
                <h1 className="text-center">Favorites Page</h1>
                <body>
                    {this.state.favorite1.map(tweet1 => {
                        return (
                            <div className="card border-secondary w-50 mx-auto bg-light" key={tweet1.id}>
                                <div>
                                    <img
                                        className="thumbnail img-responsive rounded-circle"
                                        alt="Cannot load"
                                        src={tweet1.user.profile_image_url}
                                        height="50px"
                                        width="50px" />
                                    <h3 className="d-inline-block">{tweet1.name} :</h3>
                                    <h5 className="d-inline-block">{tweet1.screen_name}</h5>
                                </div>
                                <div className="card-body">
                                    <h3>{tweet1.text}</h3>
                                    <span>{tweet1.created_at} </span>
                                    <span>{tweet1.favorite_count}</span>
                                </div>
                            </div>
                        )
                    })}
                    {this.state.favorite2.map(tweet2 => {
                        return (
                            <div className="card border-secondary w-50 mx-auto bg-light" key={tweet2.id}>
                                <div>
                                    <img
                                        className="thumbnail img-responsive rounded-circle"
                                        alt="Cannot load"
                                        src={tweet2.user.profile_image_url}
                                        height="50px"
                                        width="50px" />
                                    <h3 className="d-inline-block">{tweet2.name} :</h3>
                                    <h5 className="d-inline-block">{tweet2.screen_name}</h5>
                                </div>
                                <div className="card-body">
                                    <h3>{tweet2.text}</h3>
                                    <span>{tweet2.created_at} </span>
                                    <span>{tweet2.favorite_count}</span>
                                </div>
                            </div>
                        )
                    })}
                    {this.state.favorite3.map(tweet3 => {
                        return (
                            <div className="card border-secondary w-50 mx-auto bg-light" key={tweet3.id}>
                                <div>
                                    <img
                                        className="thumbnail img-responsive rounded-circle"
                                        alt="Cannot load"
                                        src={tweet3.user.profile_image_url}
                                        height="50px"
                                        width="50px" />
                                    <h3 className="d-inline-block">{tweet3.name} :</h3>
                                    <h5 className="d-inline-block">{tweet3.screen_name}</h5>
                                </div>
                                <div className="card-body">
                                    <h3>{tweet3.text}</h3>
                                    <span>{tweet3.created_at} </span>
                                    <span>{tweet3.favorite_count}</span>
                                </div>
                            </div>
                        )
                    })}

                </body>
            </div >
        )
    }
}

export default Favorites;