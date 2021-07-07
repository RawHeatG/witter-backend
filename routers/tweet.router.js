const express = require("express");
const router = express.Router();
const { Tweet } = require("../models/tweet.model");

router.route("/:userId")
    .get(async (req,res) => {
        try{
            const { userId } = req.params;
            const allTweets = await Tweet.find({user: userId}).populate("user");
            console.log(allTweets)

            res.status(200).json({ success: true, data: allTweets});
        }catch(err){
            console.log(err)
            res.status(500).json({ success: false, error: err})
        }
    })
    .post(async (req,res) => {
        try{
            const { userId } = req.params;
            const tweet = req.body;
            const NewTweet = new Tweet({...tweet, user: userId});
            const savedTweet = await NewTweet.save();

            res.status(200).json({ success: true, data: savedTweet});
        }catch(err){
            console.log(err)
            res.status(500).json({ success: false, error: err})
        }
    })

module.exports = router;