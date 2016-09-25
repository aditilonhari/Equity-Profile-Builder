/**
 * Created by rahilvora on 9/24/16.
 */
var express = require('express');
var router = express.Router();
var provinces = require('provinces');

router.get('/getForm',function(req, res, next){
    res.send(provinces);
});

router.get('/selectorPage',function(req, res, next){
    res.send(200);
});

module.exports = router;