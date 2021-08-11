import React from "react";
import Nav from "../Nav"
import MockData from './MockData';
import axios from 'axios';


class Search extends React.Component {
    constructor() {
        super()
        this.state = {
            searchQuery: '',
            searchResults: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.findTweets = this.findTweets.bind(this);
    }

    handleChange(event) {
        this.setState({
            searchQuery: event.target.value
        })
    }
    async handleSubmit(event) {
        event.preventDefault();

    }

    async findTweets(URL) {
        const tweets = await axios.get(URL);
        this.setState({
            searchResults: tweets
        })
        console.log(searchResults)
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
                        placeholder="@"
                        name="searchBar"
                        class="form bg-light w-25"
                    ></input>
                    <button type="submit" class="btn btn-primary text-light">Submit</button>
                </form>
                <hr></hr>
                <body height='100vh'>
                    <MockData />
                </body>
            </div>
        )
    }
}
export default Search