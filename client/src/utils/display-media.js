import { findProperVideo } from './findProperVideo';

export function displayMedia(tweet) {
    let content;
    if (tweet.extended_entities) {
        tweet.extended_entities.media.map(stuff => {
            switch (stuff.type) {
                case 'photo':
                    content = (<img width={stuff.sizes.small.w} height={stuff.sizes.small.h} src={stuff.media_url_https} alt="Cannot Load" />)
                    break
                case 'video':
                    content = (<video controls><source width={stuff.sizes.small.w} height={stuff.sizes.small.h} src={findProperVideo(stuff.video_info.variants)} type='video/mp4'></source></video>)
                    break
                default:
                    content = <text>Couldn't load Media</text>
            }
        })
    } else if (!tweet.extended_entities && tweet.entities) {
        tweet.entities.urls.map(stuff => {
            console.log(stuff.expanded_url);
            content = <a href={stuff.expanded_url} target="_blank" rel="noreferrer"><button>Click Here</button></a>;
        })
    } else { }
    return content;
}