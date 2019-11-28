var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Home');
});
router.get('/Detail', function(req, res, next) {
  res.render('Detail');
});
router.get('/MyCart', function(req, res, next) {
  res.render('MyCart');
});
router.get('/MyCart2', function(req, res, next) {
  res.render('MyCart2');
});
router.get('/Checkout', function(req, res, next) {
  res.render('CheckOut');
});
router.get('/Checkout2', function(req, res, next) {
  res.render('CheckOut2');
});
router.get('/Order', function(req, res, next) {
  res.render('Order');
});
router.get('/Order2', function(req, res, next) {
  res.render('Order2');
});
router.get('/MyAution', function(req, res, next) {
  res.render('MyAution');
});
router.get('/AboutUs', function(req, res, next) {
  res.render('AboutUs');
});
router.get('/Delivery', function(req, res, next) {
  res.render('DeliveryInfo');
});
router.get('/Returnpolicy', function(req, res, next) {
  res.render('PolicyReturn');
});
router.get('/Privicypolicy', function(req, res, next) {
  res.render('PrivicyPolicy');
});
router.get('/Computer_Product', function(req, res, next) {
  res.render('Computer_Product');
});
router.get('/Accessories_Computer', function(req, res, next) {
  res.render('Accessories_Computer');
});
router.get('/Elec_Component', function(req, res, next) {
  res.render('Elec_Component');
});
router.get('/Detail2', function(req, res, next) {
  res.render('Detail2');
});
module.exports = router;
