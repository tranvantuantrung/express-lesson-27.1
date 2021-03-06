const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: String,
  description: String,
  coverUrl: String,
});

const Book = mongoose.model("books", bookSchema);

module.exports = Book;
