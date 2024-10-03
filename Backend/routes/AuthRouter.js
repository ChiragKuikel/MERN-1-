const { signup } = require('../controller/AuthController');
const { signupValidation } = require('../middleware/AuthValidation');

const router = require('express').Router();

router.post('/login',(req,res)=>{
    res.send('login successful');
})

router.post('/signup',signupValidation,signup)

module.exports = router ;