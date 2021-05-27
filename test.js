const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/clean-blog-test-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const PostSchema = new Schema({
  title: String,
  message:String,
  dateCreated:String
})
const Post = mongoose.model('Post', PostSchema);
Post.create({
  title: "Title 1 ",
  detail:"Detail 1",
  dateCreated:"27.05.2021"
});