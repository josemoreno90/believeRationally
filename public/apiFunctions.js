const Youtube = require('simple-youtube-api')
//ApiKey...
const youtube = new Youtube('AIzaSyD8Cu_3KvtA_1XWO0lQ4ee06Ikce1cUnds');

module.exports = {

  fetchEverything: () => {
      let globalPlaylists;
      let queryString = {part:"snippet",channelId:"UCQsneWfl8r0lV3evE7W9o3Q",key:"AIzaSyD8Cu_3KvtA_1XWO0lQ4ee06Ikce1cUnds", maxResults:50}
      return youtube.request('playlists', queryString).then((playlists) => {
        globalPlaylists = playlists;
        return Promise.all(
          playlists.items.map(function(item){
            return youtube.getPlaylistByID(item.id).then((playlist) => {
              return playlist.getVideos();
            })
          })
        ).then(function(results){
          // console.log(globalPlaylists.items[14].snippet.thumbnails.default.url)
          return results.map((playlistVids, index) => ({
            playlistId: globalPlaylists.items[index].id,
            title: globalPlaylists.items[index].snippet.title,
            description: globalPlaylists.items[index].snippet.description,
            thumbnail: globalPlaylists.items[index].snippet.thumbnails.medium.url,
            videos: playlistVids.map((video) => ({
              videoId: video.id ,
              description: video.description,
              thumbnail: video.thumbnails.medium.url,
              title: video.title

            }))
          }))
        })
      })
  }
}
  // fetchPlaylist: () => {
  // fetchPlaylistVids: (myPlaylistId) => {
  //   return youtube.getPlaylistByID(myPlaylistId)
  // },


  // apiFunctions.fetchPlaylistVid("PLF4Fpfzm6Ig3ABrbp1sNkvkPBS_KDkeIN").then(function(playlist) {
  //     playlist.getVideos().then(function(videos){
  //       res.render('sections', {videos})
  //      })
  //   })
//   apiFunctions.fetchPlaylist().then(function(playlists) {
//     })
//
// }
