const mongoose = require("mongoose");
const { Schema } = mongoose;


const TweetSchema = Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User', 
    },
    content: {
        type: String,
        required: "Content is required."
    },
    likes: {
        type: String,
    },
}, {timestamps: true})

const Tweet = mongoose.model("Tweet", TweetSchema);

module.exports = { Tweet }
