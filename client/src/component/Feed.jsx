
import { Typography, Avatar, Box } from "@material-ui/core";
import { useEffect, useState} from 'react';
import axios from 'axios';
import './Post.css';

//Icons
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShareIcon from '@material-ui/icons/Share';

const Feed = (props) => {

    const url = 'http://localhost:5000/api';

    const username = props.username;

    var [ tweetdata, setTweetdata ] = useState([]);

    const tweetfinder = async (name) => {
        console.log(name);
        try {
            await axios.get(`${url}/tweet/search`,{'params':{username: name}})
            .then ((res) => {
                setTweetdata([...tweetdata, res.data]);
                console.log(tweetdata);
            })
        }catch(err) {
            console.log('Error while finding tweet',err);
        }
    }

    useEffect(() => {
        tweetfinder(username);
    }, [])

    return (
        <Box>
                <div className="post">
                    <div className="post__avatar">
                    <Avatar/>
                    </div>
                    <div className="post__body">
                    <div className="post__header">
                    <div className="post__headerText">
                    <h3> 
                    {tweetdata.username}
                    </h3>
                    </div>
                    <div className="post__headerDescription">
                    <p>{tweetdata.tweet}</p>
                    </div>
                    </div>
                    <div className="post__footer">
                    <ChatBubbleOutlineIcon fontSize="small"/>
                    <RepeatIcon fontSize="small"/>
                    <FavoriteBorderIcon fontSize="small"/>
                    <ShareIcon fontSize="small"/>
                    </div>
                    </div>
                </div>
        </Box>
    )
}

export default Feed;