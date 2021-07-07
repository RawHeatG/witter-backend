const express = require("express");
const router = express.Router();
const { User } = require("../models/user.model");

router.route("/:userId")
    .get( async (req,res) => {
        try{
            const { userId } = req.params;
            console.log(userId)
            const userData = await User.findOne({_id: userId})
            res.status(200).json({ success: true, data: userData })
        }catch(err){
            res.status(500).json({success: false, error: err});
        }
    })


module.exports = router;