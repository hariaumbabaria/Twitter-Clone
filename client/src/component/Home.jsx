import { useContext } from 'react';
import {Typography, makeStyles, Box} from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import { GoogleLogin } from 'react-google-login';
import Photo from '../component/homePagePhoto.jpg';
import { AccountContext } from '../context/AccountProvider';

const useStyle = makeStyles (theme => ({
    photo: {
        width: '55rem', 
        height: '47rem'
    },
    twitterIcon: {
        color: 'rgba(29,161,242,1.00)',
        width: '3rem',
        height: '3rem'
    },
    text1: {
        fontWeight: 600,
        fontSize: 70,
        marginTop: '35px'
    },
    text2: {
        fontWeight: 600,
        fontSize: 40,
        marginTop: '35px'  
    },
    text3: {
        fontSize: 13,
        marginTop: '35px'
    },
    component: {
        margin: '50px 30px'
    },
    google: {
        marginTop: '30px'
    }
}))

const Home = () => {

    const classes = useStyle();
    const clientId = '65865830850-lu951ekk3ecd1s0ckb2ovkl2vo9ckotf.apps.googleusercontent.com';

    const {account, setAccount} = useContext(AccountContext);

    const onLoginSuccess = (res) => {
        console.log('Login Successfull', res.profileObj);
        setAccount(res.profileObj);
    }
    const onLoginFailure = () => {
        console.log('Login Failed');
    }

    return (
        <Box style={{display: 'flex'}}>
            <img className={classes.photo} src={Photo} />
            <Box className={classes.component}>
                <TwitterIcon className={classes.twitterIcon} />
                <Typography className={classes.text1}>Happening now</Typography>
                <Typography className={classes.text2}>Join Twitter today.</Typography>
                <Box className={classes.google}>
                    <GoogleLogin
                        clientId={clientId}
                        isSignedIn={true}
                        onSuccess={onLoginSuccess}
                        onFailure={onLoginFailure}
                        cookiePolicy={'single_host_origin'}
                    />
                </Box>
                <Typography className={classes.text3}>By signing up, you agree to the <span style={{color: 'blue'}}>Terms of Service</span> and <span style={{color: 'blue'}}>Privacy
                <br/> Policy</span>, including <span style={{color: 'blue'}}>Cookie Use.</span></Typography>
            </Box>
        </Box>
    )
}

export default Home;