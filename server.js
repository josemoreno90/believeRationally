const express = require('express');
const app = express();
const apiFunctions = require('./public/apiFunctions');



var sm = require('sitemap')
// Creates a sitemap object given the input configuration with URLs
var sitemap = sm.createSitemap ({
  hostname: 'https://shrouded-bayou-12615.herokuapp.com/',
  cacheTime: 600000,        // 600 sec - cache purge period
  urls: [
    { url: '/courses/',  changefreq: 'daily', priority: 0.3 },
    { url: '/courses/CryptoZombiesTutorial(IntrotoSolidity)', priority: 0.3 },     // changefreq: 'weekly',  priority: 0.5
    { url: '/courses/AprendeelHTMLyCSS2018enCodecademy',  changefreq: 'daily', priority: 0.3 },
    { url: '/courses/LearnJavaOnCodecademy',  changefreq: 'daily', priority: 0.3 },
    { url: '/courses/NodejsExpressTutorial',  changefreq: 'daily', priority: 0.3 },
    { url: '/courses/freeCodeCampReviewhtml&css',  changefreq: 'daily', priority: 0.3 },
    { url: '/courses/ResponsiveDesignwithBootstrapfreeCodeCampreview',  changefreq: 'daily', priority: 0.3 },
    { url: '/courses/LearnResponsiveDesignCodecademyWebDevTutorials',  changefreq: 'daily', priority: 0.3 },
    { url: '/courses/LearnCSSCodecademy',  changefreq: 'daily', priority: 0.3 },
    { url: '/courses/LearnSQLCodecademy',  changefreq: 'daily', priority: 0.3 },
    { url: '/courses/HowToUseAPIswithJavaScript',  changefreq: 'daily', priority: 0.3 },
    { url: '/courses/LearnHTML&CSSIn2Hours&CSSFrameworkBootstrap',  changefreq: 'daily', priority: 0.3 },
    { url: '/courses/ObjectOrientedandFunctionalProgramming',  changefreq: 'daily', priority: 0.3 },
    { url: '/courses/JSONAPIsandAJAX',  changefreq: 'daily', priority: 0.3 }


  ]
});

app.use(express.static('public'))
app.set('view engine', 'ejs')

app.get('/sitemap.xml', function(req, res) {
  // sitemap.toXML( function (err, xml) {
  //     if (err) {
  //       return res.status(500).end();
  //     }
  //     res.header('Content-Type', 'application/xml');
  //     res.send( xml );
  // });
  res.render("sitemap")

});

app.get('/', (req,res) => {
  res.render("index")
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


// app.get('/shop', (req,res) => {
//   apiFunctions.fetchEverything().then(playlists => {
//     res.render('shop', {playlists})
//   })
// })

app.get('/about', (req,res) => {
  res.render("about")
})
//
// app.get('/sold-out', (req,res) => {
//   const goBack = function() {
//     window.history.back();
//   }
//   res.send("<h2>Sorry This item is sold out!</h2><a href='https://shrouded-bayou-12615.herokuapp.com/shop'><button>Back to Shop Page</button></a> ")
// })
//
// app.get('/order-success', (req,res) => {
//   res.send("<h2>Your order was successfull</h2><a href='https://shrouded-bayou-12615.herokuapp.com/#about'><button>To courses page</button></a>")
// })

app.get('/google4804797dbfb80ca3.html', (req,res) => {
  res.render('google4804797dbfb80ca3.ejs')
})





app.listen(process.env.PORT || 5000, () => {
  console.log('We Hear You!')
})
