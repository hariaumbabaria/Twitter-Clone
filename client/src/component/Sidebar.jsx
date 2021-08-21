import { useContext, useState } from 'react';
import { Typography, Box, makeStyles, Button, MenuItem, Menu, Avatar } from "@material-ui/core";
import { AccountContext } from '../context/AccountProvider';
import SidebarOption from "./SidebarOption";
import {Link, useHistory} from 'react-router-dom';
import { TwitterTimelineEmbed,TwitterShareButton, TwitterTweetEmbed} from 'react-twitter-embed';
import Feed from './Feed';

//Icons
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import EventOutlinedIcon from '@material-ui/icons/EventOutlined';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import GifIcon from '@material-ui/icons/Gif';
import PollOutlinedIcon from '@material-ui/icons/PollOutlined';
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';

import './Sidebar.css';
import './Feed.css';

const useStyle = makeStyles (theme => ({
    component: {
        margin: '10px 150px',
        display: 'flex'
    },
    TwitterIcon: {
        color: 'rgba(29,161,242,1.00)',
        width: '2rem',
        height: '2rem',
    },
    tweetButton: {
        backgroundColor: 'rgba(29,161,242,1.00)',
        color: 'white',
        width: '80px',
        height: '35px',
        borderRadius: '30px',
        marginLeft: 'auto'
    }
}))

const Sidebar = () => {

    const classes = useStyle();

    const {account, setAccount} = useContext(AccountContext);

    console.log(account);

    const history = useHistory();

    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    }

    const handleClick = (event) => {
        setOpen(event.currentTarget);
    }

    const logout = () => {
        setAccount('');
        history.push('/');
    }

    return (
        <Box className={classes.component}>
            <Box>
                <TwitterIcon className={classes.TwitterIcon} />
                <SidebarOption active Icon={HomeRoundedIcon} text="Home"/>
                <SidebarOption Icon={SearchIcon} text="Explore"/>
                <SidebarOption Icon={NotificationsNoneIcon} text ="Notifications"/>
                <SidebarOption Icon={MailOutlineIcon} text="Messages" />
                <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
                <SidebarOption Icon={ListAltIcon} text="Lists" />
                <SidebarOption Icon={PermIdentityIcon} text="Profile" />
                <SidebarOption Icon={MoreHorizIcon} text="More" />
                <Button variant="outlined" className="sidebar__tweet" fullWidth>Tweet</Button>

                <>
                    <Link><Typography onClick={handleClick} className="menu"><Avatar style={{marginLeft: '2px'}}/>@{account.username}</Typography></Link>
                    <Menu
                        anchorEl={open}
                        open={Boolean(open)}
                        onClose={handleClose}
                        className={classes.component}
                    >
                        <MenuItem onClick={() => { handleClose(); logout();}}>
                            <Typography>Logout</Typography>
                        </MenuItem>
                    </Menu>
                </>
            </Box>
            <Box className="tweet__box">
                <Box className='feed' >
                    <Box className='feed__header'>
                        <Typography className="home" style={{fontWeight: 600, fontSize: 18}}>Home</Typography>
                        <Box className='tweetbox'>
                            <Avatar style={{marginLeft: '2px'}} />
                            <input maxlength="140" style={{marginLeft: '20px', width: '100%' }} placeholder="What's happening ?"/>
                        </Box>
                        <Box className="home" style={{marginTop: '15px', display: 'flex', alignItems: 'center'}}>
                            <ImageOutlinedIcon className="tweetbox2"/>
                            <GifIcon className="tweetbox2"/>
                            <PollOutlinedIcon className="tweetbox2" />
                            <SentimentSatisfiedOutlinedIcon className="tweetbox2" />
                            <EventOutlinedIcon className="tweetbox2" />
                            <Button className={classes.tweetButton}>Tweet</Button>
                        </Box>
                    </Box>
                    <Box>
                        <Feed/>
                    </Box>
                </Box>
            </Box>
            <Box className="widget">
                <Box className="widget__input">
                    <SearchIcon className="widget__searchIcon"/>
                    <input placeholder="Search Twitter" type="text"/>
                </Box>
                <Box className="widget__container">
                    <h2>What's happening</h2>
                    <TwitterTweetEmbed tweetId={"1427364378861457435"}/>
                    <TwitterTimelineEmbed sourceType="profile" screenName="BCCI" options={{height:400}}/>

                </Box>
            </Box>
        </Box>
    )
}

export default Sidebar;
