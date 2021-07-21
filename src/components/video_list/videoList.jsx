import React from 'react';
import VideoItem from '../video_item/videoItem';

const VideoList = (props) => (
  <ul>
    {props.videos.map(video => 
    <VideoItem key={video.id} video={video} />
    )}
  </ul>
)

export default VideoList;