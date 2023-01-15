//going to need a user, post, and comment route
const router = require('express').Router();
const userRoute = require('./userRoute');
const postRoute = require('./postRoute');
const commentRoute = require('./commentRoute.js');



router.use('/users', userRoute);
router.use('/posts', postRoute);
// router.use('/comments', commentRoutes);

module.exports = router;