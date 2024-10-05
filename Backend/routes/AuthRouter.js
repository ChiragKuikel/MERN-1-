const { signup } = require('../controller/AuthController');
const { signupValidation, loginValidation } = require('../middleware/AuthValidation');
const { login } = require('../controller/AuthController')

const router = require('express').Router();

router.post('/login', loginValidation,login)

router.post('/signup',signupValidation,signup)

module.exports = router ;