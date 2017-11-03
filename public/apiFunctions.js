// const ypi = require('youtube-playlist-info');
const Youtube = require('simple-youtube-api')
const youtube = new Youtube('AIzaSyD8Cu_3KvtA_1XWO0lQ4ee06Ikce1cUnds');

module.exports = {
  fetchPlaylist: (myPlaylistId) => {
    return youtube.getPlaylistByID(myPlaylistId)
  },
  fetchChannel: (myChannelId) => {
    return youtube.getChannelByID(myChannelId)
  }
}
