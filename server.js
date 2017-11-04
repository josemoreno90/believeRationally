const express = require('express');
const app = express();
const apiFunctions = require('./public/apiFunctions');


app.use(express.static('public'))
app.set('view engine', 'ejs')

app.get('/', (req,res) => {
  res.render("index")
})

app.get('/about', (req,res) => {
  res.render("about")
})

app.get('/sections', (req,res) => {
  // apiFunctions.fetchPlaylist("PLF4Fpfzm6Ig3ABrbp1sNkvkPBS_KDkeIN").then(function(playlist) {
  //     playlist.getVideos().then(function(videos){
  //       res.render('sections', {videos})
  //      })
  //   })
  apiFunctions.fetchPlaylist().then(function(playlists) {
        res.render('sections', {playlists})
    })

})

app.get('/sections/:lesson', (req,res) => {
  const id = parseInt(req.params.id);

  res.render("lesson")
})


app.listen(3000, () => {
  console.log('We Hear You!')
})
