export function findProperVideo(videoArray) {
    const properVideo = videoArray.find(element => element.content_type === 'video/mp4');
    return (properVideo.url)
}