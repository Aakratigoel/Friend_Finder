var express = require("express");
var app = express();
var router = express.Router();
var path = require("path");
var friendList = require("../data/friends.js");

router.get('/api/friends',function(req,res)
{
    return res.json(friendList);
});
router.post('/api/friends', function(req, res){
    var newFriend = req.body;
    res.json(newFriend);
    friendList.push(newFriend);

    
    console.log(newFriend);
 });
 module.exports = router;
