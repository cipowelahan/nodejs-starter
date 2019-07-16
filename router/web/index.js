const express = require('express');
const authRouter = require('./auth');
const welcome = require('./../../controller/web/welcome')
const router = express.Router();

router.use(authRouter);
router.get('/', welcome.getWelcome);

module.exports = router;
