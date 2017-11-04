const Youtube = require('simple-youtube-api')
//ApiKey...
const youtube = new Youtube('AIzaSyD8Cu_3KvtA_1XWO0lQ4ee06Ikce1cUnds');

module.exports = {
  fetchPlaylist: () => {
    let queryString = {part:"snippet",channelId:"UCQsneWfl8r0lV3evE7W9o3Q",key:"AIzaSyD8Cu_3KvtA_1XWO0lQ4ee06Ikce1cUnds", maxResults:50}
    return youtube.request('playlists', queryString)
  },
  fetchPlaylistVids: (myPlaylistId) => {
    return youtube.getPlaylistByID(myChannelId)
  }
}
