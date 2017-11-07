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

app.get('/courses/:playlistId', (req,res) => {
  const lesson = req.params.playlistId;
  apiFunctions.fetchEverything().then((playlists) => {
    res.render('lesson', {playlists, lesson})
  });
})

app.get('/about', (req,res) => {
  res.render("about")
})





app.listen(3000, () => {
  console.log('We Hear You!')
})
