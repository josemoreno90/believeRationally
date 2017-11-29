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
  const videoTitle = req.params.videoTitle;
  apiFunctions.fetchEverything().then(playlists => {
    res.render('lesson', {playlists, playlistTitle, videoTitle})
  })
})


app.get('/shop', (req,res) => {
  apiFunctions.fetchEverything().then(playlists => {
    res.render('shop', {playlists})
  })
})

app.get('/about', (req,res) => {
  res.render("about")
})

app.get('/sold-out', (req,res) => {
  const goBack = function() {
    window.history.back();
  }
  res.send("<h2>Sorry This item is sold out!</h2><a href='https://shrouded-bayou-12615.herokuapp.com/shop'><button>Back to Shop Page</button></a> ")
})

app.get('/order-success', (req,res) => {
  res.send("<h2>Your order was successfull</h2><a href='https://shrouded-bayou-12615.herokuapp.com/#about'><button>To courses page</button></a>")
})

app.get('/google4804797dbfb80ca3.html', (req,res) => {
  res.render('google4804797dbfb80ca3.ejs')
})





app.listen(process.env.PORT || 5000, () => {
  console.log('We Hear You!')
})
