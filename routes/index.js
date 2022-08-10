var express = require('express');
var router = express.Router();

const messages = [
  { 
    text: 'Hi There!',
    user: "Amando",
    added: new Date()
  },
  {
    text: 'Hello World!', 
    user: "Charles",
    added: new Date()
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Message Board', messages: messages });
});

router.post('/new', (req, res, next) => {
  const newMessage = {
    text: req.body.text,
    user: req.body.user,
    date: new Date()
  }

  messages.unshift(newMessage);
  res.redirect('/');
})

module.exports = router;
