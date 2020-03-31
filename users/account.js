const router = require('express').Router();
let Account = require('../models/accounts.model');

router.route('/').get((req, res) => {
  Account.find()
    .then(account => res.json(account))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;

  const newAccount = new Account({username});

  newAccount.save()
    .then(() => res.json('Customer added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;