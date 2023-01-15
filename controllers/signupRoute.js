const router = require('express').Router();

router.get('/', (req,res) => {
  res.render('signup', 
  { title: 'signup' }) // variable?
});

module.exports = router;