//homepage route

const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoute = require('./homeRoute');
const loginRoute = require('./loginRoute');
const signupRoute = require('./signupRoute');
const dashboardRoute = require('./dashboardRoute');


router.use('/', homeRoute);
router.use('/login', loginRoute);
router.use('/signup', signupRoute);
router.use('/dashboard', dashboardRoute);

// router.use('/api', apiRoutes);

module.exports = router;
