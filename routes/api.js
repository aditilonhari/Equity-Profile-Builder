/**
 * Created by rahilvora on 9/24/16.
 */
var express = require('express');
var router = express.Router();
var provinces = require('provinces');

router.get('/getForm',function(req, res, next){
    res.send(provinces);
    //console.log("Some data");
});

console.log("Some data 111");
router.get('/selectorPage',function(req, res, next){
    res.send(200);
    //console.log("Some data");
});

module.exports = router;