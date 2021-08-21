import { useContext } from 'react';
import {Typography, makeStyles, Box, Button} from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import Photo from '../component/homePagePhoto.jpg';
import { useHistory } from 'react-router-dom';


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
    signup: {
        marginTop: '15px',
        backgroundColor: 'rgba(29,161,242,1.00)',
        color: 'white',
        width: '110px',
        height: '50px',
        borderRadius: '30px'
    },
    login: {
        marginTop: '15px',
        marginLeft: '15px',
        backgroundColor: 'rgba(29,161,242,1.00)',
        color: 'white',
        width: '110px',
        height: '50px',
        borderRadius: '30px'
    }
}))

const Home = () => {

    const classes = useStyle();

    const history = useHistory();

    const clickHandler1 = async () => {
        history.push("/signup");
    }
    const clickHandler2 = async () => {
        history.push("/login");
    }

    return (
        <div>
            <Box style={{display: 'flex'}}>
                <img className={classes.photo} src={Photo} />
                <Box className={classes.component}>
                    <TwitterIcon className={classes.twitterIcon} />
                    <Typography className={classes.text1}>Happening now</Typography>
                    <Typography className={classes.text2}>Join Twitter today.</Typography>
                    <Box>
                        <Button onClick={() => clickHandler1()} className={classes.signup}>Sign Up</Button>
                        <Button onClick={() => clickHandler2()} className={classes.login}>Login</Button>
                    </Box>
                    <Typography className={classes.text3}>By signing up, you agree to the <span style={{color: 'blue'}}>Terms of Service</span> and <span style={{color: 'blue'}}>Privacy
                    <br/> Policy</span>, including <span style={{color: 'blue'}}>Cookie Use.</span></Typography>
                </Box>
            </Box>
        </div>
    )
}

export default Home;