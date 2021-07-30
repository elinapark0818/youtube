import React, {useEffect, useState, useCallback} from 'react';
import styles from './app.module.css';
import SearchHeader from './components/searchHeader/searchHeader';
import VideoList from './components/video_list/videoList';
import VideoDetail from './components/video_detail/videoDetail';
import Channels from './components/channel_list/channels';

function App({ youtube }) {
  
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const [selectedChannel, setSelectedChannel] = useState([null]);

  const selectVideo = video => {
    // 매개변수가 한 개인 경우, 소괄호를 생략할 수 있다.
    setSelectedVideo(video);
  };

  const search = useCallback(
    query => {
      setSelectedVideo(null);
      youtube
        .search(query) //
        .then(videos => {
          setVideos(videos)
      });
    },[youtube]);

  const selectChannel = useCallback(
    channelId => {
      setSelectedVideo(null);
      youtube
        .channels(channelId) //
        .then(videos => {
          setVideos(videos)
      });
    },[youtube]);
  
  useEffect(() => {
    youtube
      .mostPopular()
      .then(videos => setVideos(videos));
  }, [youtube]);

// effect를 실행하고 이를 정리(clean-up)하는 과정을 (마운트와 마운트 해제 시에)딱 한 번씩만 실행하고 싶다면, 빈 배열([])을 두 번째 인수로 넘기면 됩니다.
// 빈 배열([])을 넘기게 되면, effect 안의 prop과 state는 초깃값을 유지하게 됩니다.

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <Channels 
        onClickedChannel={selectChannel}
        />
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList 
          videos={videos} 
          onVideoClick={selectVideo} 
          display={selectedVideo ? 'list' : 'grid'}
          />
        </div>
      </section>
    </div>
  );
}
export default App;