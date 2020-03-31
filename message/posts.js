const router = require('express').Router();//using router() to create routes
let Posts = require('../models/posts.model');

//get request
router.route('/').get((req, res) => {
  Posts.find()
    .then(posts=> res.json(posts))
    .catch(err => res.status(400).json('Error: ' + err));
});

//post request
router.route('/add').post((req, res) => {
  const username = req.body.username;
  const title = req.body.title;
  const text = req.body.text;
  const date = Date.parse(req.body.date);

  const newPost = new Posts({
    username,
    title,
    text,
    date,
  });

  newPost.save()
  .then(() => res.json('Post added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

//fetches a specific posts
router.route('/:id').get((req, res) => {
  Posts.findById(req.params.id)
    .then(posts => res.json(posts))
    .catch(err => res.status(400).json('Error: ' + err));
});

//updates a specific posts
router.route('/update/:id').post((req, res) => {
  Posts.findById(req.params.id)
    .then(posts => {
      posts.username = req.body.username;
      posts.title = req.body.product;
      posts.text = Number(req.body.waiting);
      posts.date = Date.parse(req.body.date);

      posts.save()
        .then(() => res.json('Post updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

//deletes a specific posts
router.route('/:id').delete((req, res) => {
    Posts.findByIdAndDelete(req.params.id)
      .then(() => res.json('Post deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
});
  

module.exports = router;