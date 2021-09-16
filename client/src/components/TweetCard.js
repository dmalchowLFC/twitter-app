import React, { Component } from "react";
import heart from "../images/heart-icon.png";
import retweet from "../images/retweet.png";
import { formatDate } from "../utils/date";
import { displayMedia } from "../utils/display-media";

export class TweetCard extends Component {
    render({ tweet } = this.props) {
        return (
            <div className="card border-secondary w-75 mx-auto bg-light">
                <div>
                    <img
                        className="thumbnail img-responsive rounded-circle"
                        alt="Cannot load"
                        src={tweet.user.profile_image_url}
                        height="50px"
                        width="50px"
                    />
                    <h3 className="d-inline-block">{tweet.user.name} :</h3>
                    <h5 className="d-inline-block ml-3">@ {tweet.user.screen_name}</h5>
                </div>
                <div className="card-body">
                    <h4>{tweet.full_text}</h4>
                    <hr></hr>
                    <div className="d-flex justify-content-center">
                        {displayMedia(tweet)}
                    </div>
                    <hr></hr>
                    <div className="d-flex justify-content-between">
                        <span>{formatDate(tweet.created_at)} </span>
                        <div>
                            <img src={heart} id="heart" alt="Cannot load" />
                            <span>{tweet.favorite_count}</span>
                        </div>
                        <div>
                            <img src={retweet} id="retweet" alt="Cannot load" />
                            <span>{tweet.retweet_count}</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TweetCard;