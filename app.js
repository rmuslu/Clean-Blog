const express = require('express');
const path = require('path');
const ejs = require('ejs');
const app = express();
const mongoose = require('mongoose');
const Post = require('./models/Post');
const { findById } = require('./models/Post');
//DB CONNECT
mongoose.connect('mongodb://localhost/clean-blog-test-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}); 

//TEMPLATE ENGINE
app.set("view engine","ejs");


//MIDDLEWARE
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get('/',async (req, res) => {
  const posts = await Post.find({})
  res.render('index', {
    posts
  })
});

app.get('/post/:id', async (req, res) => {
  const post = await Post.findById(req.params.id)
  res.render('post', {
    post
  })
});

app.get('/about', (req, res) => {
  //res.sendFile(path.resolve(__dirname, 'temp/index.html'));
 res.render('about');
});
app.get('/add_post', (req, res) => {
  //res.sendFile(path.resolve(__dirname, 'temp/index.html'));
 res.render('add_post');
});

app.get('/post', (req, res) => {
  //res.sendFile(path.resolve(__dirname, 'temp/index.html'));
 res.render('post');
});

app.post('/',async (req, res) => {
 await post.create(req.body);
  res.redirect('/');

});


const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı..`);
});
