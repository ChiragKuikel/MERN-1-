const router = require('express').Router();
const ensureAuthenticated = require('../middleware/Auth')
router.get('/',ensureAuthenticated,(req,res)=>{
    res.status(200).json([
        {
            name:"mobile",
            price: 200000
        },
        {
            name:"TV",
            price: 45000
        }
    ]

    )
})
module.exports = router ;