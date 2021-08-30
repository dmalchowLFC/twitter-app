import React from "react";
import Nav from "../Nav";
import axios from 'axios';
import heart from '../images/heart-icon.png';
import retweet from '../images/retweet.png';

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
                <h1 className="text-center">Favorites Page</h1>
                <body>
                    {this.state.favorite1.map(tweet1 => {
                        return (
                            <div className="card border-secondary w-75 mx-auto bg-light" key={tweet1.id}>
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
                                    <h4>{tweet1.full_text}</h4>
                                    <hr></hr>
                                    <div className="d-flex justify-content-center">{this.displayMedia(tweet1)}</div>
                                    <hr></hr>
                                    <div className="d-flex justify-content-between">
                                        <span>{this.formatDate(tweet1.created_at)} </span>
                                        <div><img src={heart} id="heart" /><span>{tweet1.favorite_count}</span></div>
                                        <div><img src={retweet} id='retweet' /><span>{tweet1.retweet_count}</span></div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    {this.state.favorite2.map(tweet2 => {
                        return (
                            <div className="card border-secondary w-75 mx-auto bg-light" key={tweet2.id}>
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
                                    <h4>{tweet2.full_text}</h4>
                                    <hr></hr>
                                    <div className="d-flex justify-content-center">{this.displayMedia(tweet2)}</div>
                                    <hr></hr>
                                    <div className="d-flex justify-content-between">
                                        <span>{this.formatDate(tweet2.created_at)} </span>
                                        <div><img src={heart} id="heart" /><span>{tweet2.favorite_count}</span></div>
                                        <div><img src={retweet} id='retweet' /><span>{tweet2.retweet_count}</span></div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    {this.state.favorite3.map(tweet3 => {
                        return (
                            <div className="card border-secondary w-75 mx-auto bg-light" key={tweet3.id}>
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
                                    <h4>{tweet3.full_text}</h4>
                                    <hr></hr>
                                    <div className="d-flex justify-content-center">{this.displayMedia(tweet3)}</div>
                                    <hr></hr>
                                    <div className="d-flex justify-content-between">
                                        <span>{this.formatDate(tweet3.created_at)} </span>
                                        <div><img src={heart} id="heart" /><span>{tweet3.favorite_count}</span></div>
                                        <div><img src={retweet} id='retweet' /><span>{tweet3.retweet_count}</span></div>
                                    </div>
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

// displayMedia(tweet) {
    //     let content;
    //     if (tweet.extended_entities && tweet.extended_entities.media.length === 1) {
    //         tweet.extended_entities.media.map(stuff => {
    //             switch (stuff.type) {
    //                 case 'photo':
    //                     content = (<img width={stuff.sizes.small.w} height={stuff.sizes.small.h} src={stuff.media_url_https} />)
    //                     break
    //                 case 'video':
    //                     content = (<video><source width={stuff.sizes.small.w} height={stuff.sizes.small.h} src={this.findProperVideo(stuff.video_info.variants)} type='video/mp4'></source></video>)
    //                     break
    //             }
    //         })
    //     } else if (tweet.extended_entities && tweet.extended_entities.media.length > 1) {
    //         tweet.extended_entities.media.map(stuff => {
    //             switch (stuff.type) {
    //                 case 'photo':
    //                     content =
    //                         <div id="carouselBoxControls" class="carousel slide" data-ride="carousel">
    //                             <div class="carousel-inner">
    //                                 <div class="carousel-item active">
    //                                     <img class="d-block w-100" src={stuff[0].media_url_https} alt="First slide" />
    //                                 </div>
    //                                 {tweet.extended_entities.media.slice(1).map(stuff => {
    //                                     <div class="carousel-item">
    //                                         <img class="d-block w-100" src={stuff.media_url_https} alt="Another slide" />
    //                                     </div>
    //                                 })}
    //                             </div>
    //                             <a class="carousel-control-prev" href="#carouselBoxControls" role="button" data-slide="prev">
    //                                 <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    //                                 <span class="sr-only">Previous</span>
    //                             </a>
    //                             <a class="carousel-control-next" href="#carouselBoxControls" role="button" data-slide="next">
    //                                 <span class="carousel-control-next-icon" aria-hidden="true"></span>
    //                                 <span class="sr-only">Next</span>
    //                             </a>
    //                         </div>
    //                     break
    //                 case 'video':
    //                     content =
    //                         <div id="carouselBoxControls" class="carousel slide" data-ride="carousel">
    //                             <div class="carousel-inner">
    //                                 <div class="carousel-item active">
    //                                     <video><source
    //                                         class="d-block w-100"
    //                                         alt="First slide"
    //                                         src={this.findProperVideo(stuff[0].video_info.variants)}
    //                                         type='video/mp4'></source></video>
    //                                 </div>
    //                                 {tweet.extended_entities.media.slice(1).map(stuff => {
    //                                     <div class="carousel-item">
    //                                         <video><source
    //                                             class="d-block w-100"
    //                                             alt="First slide"
    //                                             src={this.findProperVideo(stuff.video_info.variants)}
    //                                             type='video/mp4'></source></video>
    //                                     </div>
    //                                 })}
    //                             </div>
    //                             <a class="carousel-control-prev" href="#carouselBoxControls" role="button" data-slide="prev">
    //                                 <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    //                                 <span class="sr-only">Previous</span>
    //                             </a>
    //                             <a class="carousel-control-next" href="#carouselBoxControls" role="button" data-slide="next">
    //                                 <span class="carousel-control-next-icon" aria-hidden="true"></span>
    //                                 <span class="sr-only">Next</span>
    //                             </a>
    //                         </div>
    //                     break
    //             }
    //         })
    //     } else if (!tweet.extended_entities && tweet.entities) {
    //         tweet.entities.urls.map(stuff => {
    //             console.log(stuff.expanded_url);
    //             content = <a href={stuff.expanded_url} target="_blank"><button>Click Here</button></a>;
    //         })
    //     } else { }
    //     return content;
    // }