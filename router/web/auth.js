const express = require('express');
const userController = require('./../../controller/web/user');

const router = express.Router();

router.get('/login', userController.getLogin);

module.exports = router;
