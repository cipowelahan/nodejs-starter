const express = require('express');
const authRouter = require('./auth');
const welcome = require('./../../controller/web/welcome')
const router = express.Router();
const passportConfig = require('../../config/passport/web');

router.use(authRouter);
router.get('/', passportConfig.isAuthenticated, welcome.getWelcome);

module.exports = router;
