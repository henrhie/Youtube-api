import React from "react";
import "./VideoItem.css"

export default ({video, onVideoSelect}) => {
    const title = video.snippet.title;
    const thumbnail = video.snippet.thumbnails.medium.url;
    return (
        <div className="video-item item" onClick={() => { onVideoSelect(video) }}>
            <img className="ui image" src={thumbnail} alt="thumbnail"/>
            <div className="content">
                <div className="header">{title}</div>
            </div>
        </div>
    )
}