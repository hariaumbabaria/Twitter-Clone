import mongoose from 'mongoose';

const tweet = new mongoose.Schema( {
    username: {
        type: String
    },
    tweet: {
        type: String,
        max: 140,
        min: 1
    }
});

const Tweet=mongoose.model('Tweet', tweet);

export default Tweet;