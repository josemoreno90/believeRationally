const express = require('express');
const app = express();
const apiFunctions = require('./public/apiFunctions');



app.use(express.static('public'))
app.set('view engine', 'ejs')

app.get('/sitemap.xml', function(req, res) {
  res.render("sitemap")

});

app.get('/', (req,res) => {
  res.render("index")
})

app.get('/blog', (req,res) => {
  res.render("blog")
})

app.get('/courses', (req,res) => {
  const playlistTitle = req.params.playlistTitle;
  const videoTitle = req.params.videoTitle;
  apiFunctions.fetchEverything().then((playlists) => {
    res.render('courses', {playlists, playlistTitle, videoTitle})
  });
})

app.get('/courses/:playlistTitle', (req,res) => {
  const theUrl = req.url;
  const videoTitle = req.params.videoTitle;
  const playlistTitle = req.params.playlistTitle;
  apiFunctions.fetchEverything().then((playlists) => {
    res.render('lessons', {playlists, playlistTitle, videoTitle, theUrl})
  });
})

app.get('/courses/:playlistTitle/:videoTitle', (req,res) => {
  const theUrl = req.url;
  const playlistTitle = req.params.playlistTitle;
  const videoTitle = req.params.videoTitle;
  apiFunctions.fetchEverything().then(playlists => {

    res.render('lesson', {playlists, playlistTitle, videoTitle, theUrl})
  })
})

app.get('/.well-known/brave-rewards-verification.txt', (req,res) => {
    res.render('brave-rewards-verification')
})



// app.get('/shop', (req,res) => {
//   apiFunctions.fetchEverything().then(playlists => {
//     res.render('shop', {playlists})
//   })
// })

app.get('/about', (req,res) => {
  res.render("about")
})


app.get('/ads.txt', (req,res) => {
  res.render("ads")
})



app.get('/freeCodeCamp', (req, res) => {
  res.render("freeCodeCamp")
})


app.get('/google4804797dbfb80ca3.html', (req,res) => {
  res.render('google4804797dbfb80ca3.ejs')
})





app.listen(process.env.PORT || 7200, () => {
  console.log('We Hear You!')
})
