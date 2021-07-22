import React, {useEffect, useState} from 'react';
import styles from './app.module.css';
import SearchHeader from './components/searchHeader/searchHeader';
import VideoList from './components/video_list/videoList';

// const apiKey = process.env.REACT_APP_API_KEY;

function App({ youtube }) {
  
  const [videos, setVideos] = useState([]);
  const search = query => {
    youtube.search(query)
    .then(videos => setVideos(videos))
  };  
  
  useEffect(() => {
    youtube.mostPopular()
    .then(videos => setVideos(videos))
  }, []);

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <VideoList videos={videos} />
    </div>
  );
}
export default App;
