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
    // res.json(newFriend);
    friendList.push(newFriend);
    console.log(newFriend);
    var scoreDifference = [];
    var sum = 0;
    var compareFriend = [];
    for (var i = 0; i < friendList.length - 1; i++) {
      var trackFriendScore = {};
      
      console.log("Entered first loop")
      var currentFriend = friendList[i];
      scoreDifference=[];
      sum=0;
      console.log("Current Friend"+currentFriend.name);
      console.log("Current friend"+currentFriend.scores);
      for (var j = 0; j < newFriend.scores.length; j++) {
        scoreDifference.push(Math.abs(currentFriend.scores[j] - newFriend.scores[j]));
      }
      console.log("Score Difference"+scoreDifference);
      for (var k = 0; k < scoreDifference.length; k++) {
        sum = sum + scoreDifference[k]; 
      }
      trackFriendScore.friendName = currentFriend.name,
      trackFriendScore.friendPhoto = currentFriend.photo,
      trackFriendScore.scoreSum = sum
      compareFriend.push(trackFriendScore);
      console.log(compareFriend);
    }
    var minimumDiff = compareFriend[0].scoreSum;
    var minimumDiffName = compareFriend[0].friendName;
    var minimumDiffPhoto = compareFriend[0].friendPhoto;
    for (var y = 1; y < compareFriend.length; y++) {
      if (compareFriend[y].scoreSum < minimumDiff) {
        minimumDiff = compareFriend[y].scoreSum;
        minimumDiffName = compareFriend[y].friendName;
        minimumDiffPhoto = compareFriend[y].friendPhoto;
      }
    }
    console.log(minimumDiffName);
    console.log(minimumDiffPhoto);
    console.log(minimumDiff);
    var match = {};
    match.name = minimumDiffName;
    match.photo = minimumDiffPhoto;
    match.score = minimumDiff;
    res.json(match);
 });
 module.exports = router;
