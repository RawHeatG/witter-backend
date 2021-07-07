const express = require("express");
const router  = express.Router;
const { Tweet } = require("../models/tweet.model");

router.route("/:userId")
    .get(async (req,res) => {
        try{
            const userId = req.params;
            const allTweets = await Tweet.find({userId});
            console.log(alltweets)
            res.status(200).json({ success: true, data: allTweets});
        }catch(err){
            res.status(500).json({ success: false, error: err})
        }
    })

module.exports = router;