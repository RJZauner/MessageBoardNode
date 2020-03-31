/*
A simple model that allows the user to create account using only their user name.
*/

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const accountSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
}, {
  timestamps: true,
});

const Account = mongoose.model('Account', accountSchema);

module.exports = Account;