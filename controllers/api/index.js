//going to need a user, post, and comment route
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes.js');



router.use('/users', userRoutes);
router.use('/products', postRoutes);
router.use('/comments', commentRoutes);

module.exports = router;