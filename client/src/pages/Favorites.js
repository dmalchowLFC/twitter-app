import React from "react";
import Nav from "../Nav";
import axios from 'axios';
import heart from '../images/heart-icon.png';

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
        };
        this.getTweets = this.getTweets.bind(this);
        this.formatDate = this.formatDate.bind(this);
        this.displayMedia = this.displayMedia.bind(this);
    }
    componentDidMount() {
        this.getTweets()
    };

    getTweets() {
        axios.all([axiosRequest1, axiosRequest2, axiosRequest3])
            .then(axios.spread((res1, res2, res3) => {
                console.log(res1, res2, res3);
                this.setState({
                    favorite1: res1.data,
                    favorite2: res2.data,
                    favorite3: res3.data
                });
            }));
    }

    formatDate(date) {
        const formattedDate = new Date(date);
        const options = {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        };
        return formattedDate.toLocaleDateString("en-US", options);

    }

    displayMedia(tweet) {
        if (tweet.extended_entities) {
            tweet.extended_entities.media.map(stuff => {
                console.log('Extended Entities obj', stuff.expanded_url)
            })
        } else if (!tweet.extended_entities && tweet.entities) {
            tweet.entities.urls.map(stuff => {
                console.log('Entities obj', stuff.expanded_url)
            })
        } else { }
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
                                    <h3 className="d-inline-block">{tweet1.user.name} :</h3>
                                    <h5 className="d-inline-block ml-3">@ {tweet1.user.screen_name}</h5>
                                </div>
                                <div className="card-body">
                                    <h3>{tweet1.text}</h3>
                                    <section>{this.displayMedia(tweet1)}</section>
                                    <span>{this.formatDate(tweet1.created_at)} </span>
                                    <img src={heart} id='heart' /><span>{tweet1.favorite_count}</span>
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
                                    <h3 className="d-inline-block">{tweet2.user.name} :</h3>
                                    <h5 className="d-inline-block ml-3">@ {tweet2.user.screen_name}</h5>
                                </div>
                                <div className="card-body">
                                    <h3>{tweet2.text}</h3>
                                    <section>{this.displayMedia(tweet2)}</section>
                                    <span>{this.formatDate(tweet2.created_at)} </span>
                                    <img src={heart} id='heart' /><span>{tweet2.favorite_count}</span>
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
                                    <h3 className="d-inline-block">{tweet3.user.name} :</h3>
                                    <h5 className="d-inline-block ml-3">@ {tweet3.user.screen_name}</h5>
                                </div>
                                <div className="card-body">
                                    <h3>{tweet3.text}</h3>
                                    <section>{this.displayMedia(tweet3)}</section>
                                    <span>{this.formatDate(tweet3.created_at)} </span>
                                    <img src={heart} id='heart' /><span>{tweet3.favorite_count}</span>
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