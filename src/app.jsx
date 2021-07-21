import React, {useEffect, useState} from 'react';
import './app.css';
import VideoList from './components/video_list/videoList';

// const apiKey = process.env.REACT_APP_API_KEY;

function App() {
  const [videos, setVideos] = useState([]);
  
  useEffect(() => {
    
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://youtube.googleapis.com/youtube/v3/videos?key=AIzaSyBBdCszbsbD9nIHn-jrMS_0mLYTIXuUcLQ&part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBBdCszbsbD9nIHn-jrMS_0mLYTIXuUcLQ", 
    requestOptions
    )
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));

  }, []);

  return <VideoList videos={videos}/>;

}

export default App;
