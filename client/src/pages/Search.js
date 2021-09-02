import React from "react";
import Nav from "../Nav"
import axios from 'axios';
import heart from '../images/heart-icon.png';
import retweet from '../images/retweet.png';

class Search extends React.Component {
    constructor() {
        super()
        this.state = {
            searchQuery: '',
            searchResults: []
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.formatDate = this.formatDate.bind(this);
        this.displayMedia = this.displayMedia.bind(this);
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
        let content;
        if (tweet.extended_entities) {
            tweet.extended_entities.media.map(stuff => {
                switch (stuff.type) {
                    case 'photo':
                        content = (<img width={stuff.sizes.small.w} height={stuff.sizes.small.h} src={stuff.media_url_https} />)
                        break
                    case 'video':
                        content = (<video><source width={stuff.sizes.small.w} height={stuff.sizes.small.h} src={this.findProperVideo(stuff.video_info.variants)} type='video/mp4'></source></video>)
                        break
                }
            })
        } else if (!tweet.extended_entities && tweet.entities) {
            tweet.entities.urls.map(stuff => {
                console.log(stuff.expanded_url);
                content = <a href={stuff.expanded_url} target="_blank"><button>Click Here</button></a>;
            })
        } else { }
        return content;
    }


    findProperVideo(videoArray) {
        const properVideo = videoArray.find(element => element.content_type === 'video/mp4');
        return (properVideo.url)
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
                <body>
                    {this.state.searchResults.map(tweet => {
                        return (
                            <div className="card border-secondary w-75 mx-auto bg-light" key={tweet.id}>
                                <div>
                                    <img
                                        className="thumbnail img-responsive rounded-circle"
                                        alt="Cannot load"
                                        src={tweet.user.profile_image_url}
                                        height="50px"
                                        width="50px" />
                                    <h3 className="d-inline-block">{tweet.user.name} :</h3>
                                    <h6 className="d-inline-block ml-3">@{tweet.user.screen_name}</h6>
                                </div>
                                <div className="card-body">
                                    <h4>{tweet.full_text}</h4>
                                    <hr></hr>
                                    <div className="d-flex justify-content-center">{this.displayMedia(tweet)}</div>
                                    <hr></hr>
                                    <div className="d-flex justify-content-between">
                                        <span>{this.formatDate(tweet.created_at)} </span>
                                        <div><img src={heart} id="heart" /><span>{tweet.favorite_count}</span></div>
                                        <div><img src={retweet} id='retweet' /><span>{tweet.retweet_count}</span></div>
                                    </div>
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