import React from "react";
import Nav from "../Nav"
import axios from 'axios';

class Search extends React.Component {
    constructor() {
        super()
        this.state = {
            searchQuery: '',
            searchResults: [],
            hasData: false
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
            .then(response => this.setState({ searchResults: [...response.data] }))
            .finally(this.setState({ hasData: true }))
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
                        placeholder="@"
                        name="searchBar"
                        class="form bg-light w-25"
                        onChange={this.handleChange}
                    ></input>
                    <button type="submit" class="btn btn-primary text-light">Submit</button>
                </form>
                <hr></hr>
                <body>
                    {this.state.searchResults.data.map(tweet => {
                        return (
                            <div className="card border-secondary w-50 mx-auto bg-light" key={tweet.id}>
                                <div>
                                    <img
                                        className="thumbnail img-responsive rounded-circle"
                                        alt="Cannot load"
                                        src={tweet.user.profile_image_url}
                                        height="50px"
                                        width="50px" />
                                    <h3 className="d-inline-block">{tweet.name} :</h3>
                                    <h5 className="d-inline-block">{tweet.screen_name}</h5>
                                </div>
                                <div className="card-body">
                                    <h1>{tweet.text}</h1>
                                    <span>{tweet.created_at} </span>
                                    <span>{tweet.favorite_count}</span>
                                </div>
                            </div>
                        )
                    })}
                </body>
            </div>
        )
    }
}
export default Search