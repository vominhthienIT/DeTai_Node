var express = require('express');
var router = express.Router();
var bodyParser = require("body-parser");
var urlencodeParser = bodyParser.urlencoded({extended:false});
var multer  = require('multer')
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './upload') //day ne
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})
var upload = multer({ storage: storage }).single('uploadFile');

var myPost_Controller = require("../Controller/MyPost_Controller");
var browsePost_Controller = require("../Controller/BrowsePost_Controller");
var home_Controller = require("../Controller/Home_Controller");
var censorship_Controller = require("../Controller/Censorship_Controller");
var approvedPro_Controller = require("../Controller/ApprovedProduct_Controller");
var choosePost_Controller = require("../Controller/ChoosePost_Controller");

router.get('/', function (req, res, next) {
    home_Controller.loadSPAll(req,res);
});
router.get('/Detail', function (req, res, next) {
    res.render('Detail');
});
router.get('/MyCart', function (req, res, next) {
    res.render('MyCart');
});
router.get('/MyCart2', function (req, res, next) {
    res.render('MyCart2');
});
router.get('/Checkout', function (req, res, next) {
    res.render('CheckOut');
});
router.get('/Checkout2', function (req, res, next) {
    res.render('CheckOut2');
});
router.get('/Order', function (req, res, next) {
    res.render('Order');
});
router.get('/Order2', function (req, res, next) {
    res.render('Order2');
});
router.get('/MyAution', function (req, res, next) {
    res.render('MyAution');
});
router.get('/AboutUs', function (req, res, next) {
    res.render('AboutUs');
});
router.get('/Delivery', function (req, res, next) {
    res.render('DeliveryInfo');
});
router.get('/Returnpolicy', function (req, res, next) {
    res.render('PolicyReturn');
});
router.get('/Privicypolicy', function (req, res, next) {
    res.render('PrivicyPolicy');
});
router.get('/Computer_Product', function (req, res, next) {
    res.render('Computer_Product');
});
router.get('/Accessories_Computer', function (req, res, next) {
    res.render('Accessories_Computer');
});
router.get('/Elec_Component', function (req, res, next) {
    res.render('Elec_Component');
});
router.get('/Detail2', function (req, res, next) {
    res.render('Detail2');
});
// router.get('/MyPost', function (req, res, next) {
//     myPost_Controller.loadLoaiSP(req, res);
// });
router.get('/ApprovedProduct', function (req, res) {
    res.render('ApprovedProduct');
});

router.get('/Accept/:tenSP', function (req, res) {
    var ten = req.params.tenSP;
    censorship_Controller.xacnhanSP(req,res,ten);
});

router.get('/Cancel/:tenSP', function (req, res) {
    var ten = req.params.tenSP;
    censorship_Controller.huySP(req,res,ten);
});

router.get('/Post', function (req, res) {
    myPost_Controller.loadLoaiSP(req, res);
});

router.post('/Post',urlencodeParser, function (req, res) {
    // // var ten = req.query.tensp;
    // // let loai = req.query.selectLoai;
    // // var gia = req.query.giasp;
    // // var hinh = req.query.uploadFile;
    // // var mt = req.query.mota;
    // // var date = new Date().getDate();
    // // var month = new Date().getMonth();
    // // month+=1;
    // // var year = new Date().getFullYear();
    // // var hours = new Date().getHours();
    // // var minute = new Date().getMinutes();
    // // var seconds = new Date().getSeconds();
    // // var time = date+"-"+month+"-"+year+" "+hours+":"+minute+":"+seconds+" ITC";
    // // myPost_Controller.insertSP(req, res, ten, loai, gia, hinh, mt,time);
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            // A Multer error occurred when uploading.
            res.send("Not OK");
        } else if (err) {
            // An unknown error occurred when uploading.
            res.send("OK");
        }

        // Everything went fine.
    })
});

router.get('/Censorship', function (req, res, next) {
    // res.render('Censorship');
    browsePost_Controller.loadSPDuyet(req, res);
});

router.get('/ShowAprrovedProduct', function (req, res, next) {
    // res.render('Censorship');
    approvedPro_Controller.loadSPDuocDuyet(req,res);
});

router.get('/AcceptProductToHome', function (req, res) {
    var val = req.query.check;
    var checkList = new Array();
    for(i=0;i<val;i++){
        if(val[i].checked()==true){
            checkList.push(val[i]);
            console.log("Oke");
            console.log(checkList);
        }
        else {
            console.log("kh co gia tri");
            break;
        }
    }
    // choosePost_Controller.checkClick(req,res,val);
});
module.exports = router;
