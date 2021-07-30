// import axios from 'axios';

class Youtube {
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

  async channels(channelId) {

    const response = await this.youtube.get('search', {
      params: {
        part: 'snippet',
        channelId,
        type: 'video',
        maxResults: 15,
      },
    });
    
    return response.data.items;
  }  
}

export default Youtube;