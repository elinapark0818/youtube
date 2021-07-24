// import axios from 'axios';

class Youtube {

  // constructor(key) {
  //   this.youtube = axios.create({
  //     baseURL: 'https://www.googleapis.com/youtube/v3',
  //     params: { key: key },
  //   });
  // }

  // dependency injection
  constructor(httpClient) {
    this.youtube = httpClient;
  }
  async mostPopular() {
    const response = await this.youtube.get('videos', {
      params: {
        part: 'snippet',
        chart: 'mostPopular',
        maxResults: 15,
        regionCode: 'KR',
      },
    });
    return response.data.items;
  }

  async search(query) {
    const response = await this.youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 15,
        type: 'video',
        q: query,
      },
    });
    return response.data.items.map(item => ({ ...item, id: item.id.videoId }));
  }

  // async Channels(channelId) {
  //   const response = await this.youtube.get('channels', {
  //     params: {
  //       type: 'video',
  //       part: 'contentDetails',
  //       forUsername : 'React',
  //       maxResults: 25,
  //       channelId,
  //     },
  //   });
  //   return response.data.items;
  // }

  // channel(videos, promises) {
  //   for (let i = 0; i < videos.length; i++) {
  //     const response = this.youtube
  //       .get('channels', {
  //         params: {
  //           part: 'snippet',
  //           maxResults: '15',
  //           id: videos[i].channelId,
  //         },
  //       })
  //       .then((result) => result.data.items[0].snippet.thumbnails.default.url)
  //       .then((url) => (videos[i].channelThumbnails = url));
  //     promises.push(response);
  //   }
  //   return promises;
  // }

  
}

export default Youtube;