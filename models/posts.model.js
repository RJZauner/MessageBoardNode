const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postsSchema = new Schema({
    username: { type: String, required: true},
    title: { type: String, required: true},
    text: {type: String, required: true},
    date: {  type: Date, required: true}, 
}, {
    timestamps: true,
});

const Posts = mongoose.model('Posts', postsSchema);

module.exports = Posts;