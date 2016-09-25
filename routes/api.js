/**
 * Created by rahilvora on 9/24/16.
 */
var express = require('express');
var router = express.Router();
var provinces = require('provinces');

console.log("Some data 111");
router.get('/getForm',function(req, res, next){
    res.send(provinces);
    //console.log("Some data");
});

module.exports = router;