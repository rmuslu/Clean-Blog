const express = require('express');

const app = express();

app.get('/', (req, res) => {

  const photo = {
    id: 1,
    titşe: "Blog Title",
    description: "Blog description"
  }
  res.send(photo)
})

const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı..`);
});
