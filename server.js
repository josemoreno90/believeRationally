const express = require('express');
const app = express();

app.use(express.static('public'))
app.set('view engine', 'ejs')

app.get('/', (req,res) => {
  res.render("index")
})

app.get('/about', (req,res) => {
  res.render("about")
})

app.get('/sections', (req,res) => {
  res.render("sections")
})

app.get('/sections/:lesson', (req,res) => {
  const id = parseInt(req.params.id);

  res.render("lesson")
})


app.listen(3000, () => {
  console.log('We Hear You!')
})
