import React from "react";
import Nav from "../Nav"
import axios from 'axios';
import TweetCard from "../components/TweetCard";

class Search extends React.Component {
    constructor() {
        super()
        this.state = {
            searchQuery: '',
            searchResults: []
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            searchQuery: event.target.value
        })
    }

    async handleSubmit(event) {
        event.preventDefault();
        await axios.get(`api/search?screen_name=${this.state.searchQuery}`)
            .then(response => this.setState({ searchResults: response.data }))
            .catch((error) => {
                alert("Screen name not found, please try another name.")
                console.log(error)
                window.location.reload()
            })
        console.log(this.state.searchResults)
    }

    render() {
        return (
            <div>
                <Nav />
                <h1>Search Page</h1>
                <form onSubmit={this.handleSubmit}>
                    <label for="searchBar">Search for a twitter username:</label>
                    <input
                        type="text"
                        placeholder="username"
                        name="searchBar"
                        class="form bg-light w-25"
                        onChange={this.handleChange}
                    ></input>
                    <button type="submit" class="btn btn-primary text-light">Submit</button>
                </form>
                <hr></hr>
                <div>
                    {this.state.searchResults.map(tweet => {
                        return (
                            <TweetCard tweet={tweet} key={tweet.id} />
                        )
                    })}
                </div>
            </div>
        )
    }
}
export default Search