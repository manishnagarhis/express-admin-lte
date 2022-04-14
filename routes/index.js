const router = require('express').Router();

router.get('/',(req,res)=>{
    res.render('index',{
        title:"My home page"
    });
})

module.exports = router;