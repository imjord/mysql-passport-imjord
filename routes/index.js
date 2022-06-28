const router = require('express').Router();
const homeRouter = require('./homeRouter');
const profileRouter = require('./profileRouter');
const logoutRouter = require('./logoutRouter');
const loginRouter = require('./loginRouter');
const registerRouter = require('./registerRoute');


router.use('/login', loginRouter);
router.use('/register', registerRouter);
router.use('/logout', logoutRouter);
router.use('/profile', profileRouter);
router.use('/', homeRouter);


module.exports = router;