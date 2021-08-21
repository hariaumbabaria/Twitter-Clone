import express from 'express';
import User from '../schema/UserSchema.js';
import Tweet from '../schema/Tweet.js';

const router=express.Router();

router.post('/signup', async (req,res,next) => {
    const exist = await User.findOne({ username: req.body.username });
    
    if(exist){
        return res.status(401).json('Username already exist');
    } 
    User.create(req.body)
    .then(data => res.json(data))
    .catch(next => console.log(next));
})

router.post('/login', async (req, res, next) => {
    const user = await User.findOne({username: req.body.username, password: req.body.password});
    if(user)
    {
        return res.status(200).json(`${req.body.username} login successfull`);
    }
    else
    {
        return res.status(401).json('Invalid Login');
    }
})

router.post('/tweet', async (req, res, next) => {
    Tweet.create(req.body)
    .then(data => res.json(data))
    .catch(next => console.log(next));
})

router.get('/tweet/search', async (req,res,next) => {
    const exist = await Tweet.find({});
    if(exist){
        return res.json(exist);
    } 
    else{
        return res.json('no tweets found');
    }
})

export default router;