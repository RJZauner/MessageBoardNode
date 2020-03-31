const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

//load in required files
const messageRouter = require('./message/posts');
const accountRouter = require('./users/account');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//mongoDB connection
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

//express to use these files
app.use('/message', messageRouter);
app.use('/account', accountRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});