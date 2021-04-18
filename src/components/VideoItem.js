import React from "react";
import "./videoItem.css";

const VideoItem = ({ videoItem, onVideoSelected }) => {
  // const { videoId } = videoItem.id;
  const { thumbnails, title } = videoItem.snippet;
  return (
    <div className="video-item item" onClick={() => onVideoSelected(videoItem)}>
      <img className="ui image" src={thumbnails.medium.url} alt={title} />
      <div className="content">
        <div className="header">{title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
