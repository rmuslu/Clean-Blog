const express = require('express');
const path = require('path');
const ejs = require('ejs');
const app = express();


//TEMPLATE ENGINE
app.set("view engine","ejs");


//MIDDLEWARE
app.use(express.static('public'));

app.get('/', (req, res) => {
  //res.sendFile(path.resolve(__dirname, 'temp/index.html'));
 res.render('index');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı..`);
});
