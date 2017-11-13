const express = require('express');
const app = express();
const apiFunctions = require('./public/apiFunctions');


app.use(express.static('public'))
app.set('view engine', 'ejs')

app.get('/', (req,res) => {
  res.render("index")
})

app.get('/courses', (req,res) => {
  apiFunctions.fetchEverything().then((playlists) => {
    res.render('courses', {playlists})
  });
})

app.get('/courses/:playlistTitle', (req,res) => {
  const playlistTitle = req.params.playlistTitle;
  apiFunctions.fetchEverything().then((playlists) => {
    res.render('lessons', {playlists, playlistTitle})
  });
})

app.get('/courses/:playlistTitle/:videoTitle', (req,res) => {
  const playlistTitle = req.params.playlistTitle;
  const videoTitle = req.params.videoTitle
  apiFunctions.fetchEverything().then((playlists) => {
    res.render('lesson', {playlists, playlistTitle, videoTitle})
  });
})

app.get('/shop', (req,res) => {
  res.render("shop")
})

app.get('/about', (req,res) => {
  res.render("about")
})





app.listen(process.env.PORT || 5000, () => {
  console.log('We Hear You!')
})
