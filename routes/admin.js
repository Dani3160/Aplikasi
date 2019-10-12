var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/hotel', {useNewUrlParser: true, useUnifiedTopology: true});

var Schema = mongoose.Schema;

var kamarSchema = new Schema({
    nomor: String,
	lantai: String,
	fasilitas: [String]
}, {collection: 'kamar'});

var kamarData = mongoose.model('kamarData', kamarSchema);


/* GET home page. */

router.get('/', function(req, res, next) {
    let data = {
        layout: 'mainAdmin',
        title: 'Selamat Datang',
    };
    res.render('admin/index', data);
});

router.get('/informasi-kamar', function(req, res, next) {
    kamarData.find()
    .then(function(doc){
        res.render('admin/room', {items: doc});
    });

});


module.exports = router;