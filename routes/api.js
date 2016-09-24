/**
 * Created by rahilvora on 9/24/16.
 */
var express = require('express');
var router = express.Router();

router.get('getForm',function(req, res, next){
    //res.send({"name":"rahil","age":25});
    console.log("SOme data");
});

module.exports = router;