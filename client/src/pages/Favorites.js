import React from "react";
import Nav from "../Nav";
import axios from 'axios';
import TweetCard from "../components/TweetCard";

const axiosRequest1 = axios.get("api/favorite1")
const axiosRequest2 = axios.get("api/favorite2")
const axiosRequest3 = axios.get("api/favorite3")

class Favorites extends React.Component {
    constructor() {
        super()
        this.state = {
            favorite1: [],
            favorite2: [],
            favorite3: []
        };
        this.getTweets = this.getTweets.bind(this);
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

    render() {
        return (
            <div>
                <Nav />
                <h1 className="text-center">Favorites Page</h1>
                <div>
                    {this.state.favorite1.map(tweet1 => {
                        return (
                            <TweetCard tweet={tweet1} key={tweet1.id} />
                        )
                    })}
                    {this.state.favorite2.map(tweet2 => {
                        return (
                            <TweetCard tweet={tweet2} key={tweet2.id} />
                        )
                    })}
                    {this.state.favorite3.map(tweet3 => {
                        return (
                            <TweetCard tweet={tweet3} key={tweet3.id} />
                        )
                    })}
                </div>
            </div >
        )
    }
}

export default Favorites;
