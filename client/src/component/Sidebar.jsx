import { useContext, useState } from 'react';
import { Typography, Box, makeStyles, Button, MenuItem, Menu } from "@material-ui/core";
import { AccountContext } from '../context/AccountProvider';
import SidebarOption from "./SidebarOption";
import {Link, useHistory} from 'react-router-dom';
import { GoogleLogout } from 'react-google-login';

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

import './Sidebar.css';

const useStyle = makeStyles (theme => ({
    component: {
        margin: '10px 150px',
        display: 'flex'
    },
    TwitterIcon: {
        color: 'rgba(29,161,242,1.00)',
        width: '2rem',
        height: '2rem',
    }
}))

const Sidebar = () => {

    const classes = useStyle();

    const {account, setAccount} = useContext(AccountContext);

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
                    <Link><Typography onClick={handleClick} className="menu"><img className="profilePicture" src={account.imageUrl} />{account.name}</Typography></Link>
                    <Menu
                        anchorEl={open}
                        open={Boolean(open)}
                        onClose={handleClose}
                        className={classes.component}
                    >
                        <MenuItem onClick={() => { handleClose(); logout();}}>
                            <GoogleLogout
                                clientId="65865830850-lu951ekk3ecd1s0ckb2ovkl2vo9ckotf.apps.googleusercontent.com"
                                buttonText="Logout"
                                onLogoutSuccess={logout}
                                >
                            </GoogleLogout>
                        </MenuItem>
                    </Menu>
                </>
            </Box>
            <Box>
                {/* <Typography>hellp</Typography> */}
            </Box>
        </Box>
    )
}

export default Sidebar;
