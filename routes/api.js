/**
 * Created by rahilvora on 9/24/16.
 */
var express = require('express');
var router = express.Router();
console.log("Some data 111");
router.get('/getForm',function(req, res, next){
    res.send({"name":"rahil","age":25});
    //console.log("Some data");
});

module.exports = router;