const express = require('express');
const User = require('../controllers/authController');
const router = express.Router();

router.post('/register', User.register);
router.post('/login', User.login);


module.exports = router;
