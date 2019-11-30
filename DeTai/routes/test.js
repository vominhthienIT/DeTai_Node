var express = require('express');
var router = express.Router();
var AWS=require('aws-sdk');
AWS.config.update({
    accessKeyId: "AKIAIIGGCRICDPABMAPQ",
    secretAccessKey: "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",
    region: "us-west-2",
    endpoint: "https://dynamodb.us-west-2.amazonaws.com"
});


var docClient = new AWS.DynamoDB.DocumentClient();
/* GET home page. */
router.get('/thucai', function(req, res, next) {
    //var maloaitim = res.params("maloaitim");
   // var maloaitim = 1;
    var params = {
        TableName: "loaisanpham",
        KeyConditionExpression: "maloai = :yyyy",
        ExpressionAttributeValues: {
            ":yyyy": "2"
        }
    };
    docClient.query(params,(err, data) => {

        data.Items.forEach(function (item) {
            var idloai = item.maloai;
            var paramsp = {
                TableName: "sanpham",
                FilterExpression: "#yr =:end_yr",
                ExpressionAttributeNames: {
                    "#yr": "maloai",
                },
                ExpressionAttributeValues: {
                    ":end_yr": idloai
                }
            }
            docClient.scan(paramsp, (err1, data1) => {
                console.log(data1.Items)
            })
        })
    })
});
module.exports = router;