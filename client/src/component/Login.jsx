import TwitterIcon from '@material-ui/icons/Twitter';
import {Typography, makeStyles, Box, Button, TextField} from '@material-ui/core';
import { authenticateLogin } from '../service/service';
import { useState, useContext } from 'react';
import { useHistory } from 'react-router';
import { AccountContext } from '../context/AccountProvider';

const useStyle = makeStyles (theme => ({
    twitterIcon: {
        color: 'rgba(29,161,242,1.00)',
        width: '3rem',
        height: '3rem'
    },
    text: {
        fontWeight: 600,
        fontSize: 40,

    },
    field: {
        width: '390px',
        marginTop: '15px'
    },
    login: {
        marginTop: '15px',
        backgroundColor: 'rgba(29,161,242,1.00)',
        color: 'white',
        width: '390px',
        height: '50px',
        borderRadius: '30px'
    }
}))

const loginInitialValues = {
    username: '',
    password: ''
};

const SignUp = () => {

    const classes = useStyle();

    const [login, setLogin] = useState(loginInitialValues);

    const {account, setAccount} = useContext(AccountContext);

    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    }

    const history = useHistory();

    const clickHandler = async () => {
        let response = await authenticateLogin(login);
        console.log(response);
        if(!response) {
            alert("invalid login");
            setLogin({ ...login, password: ''});
            return;
        }
        setLogin(loginInitialValues);
        setAccount(login);
        history.push("/home");
    }

    return(
        <Box style={{marginLeft: '590px', marginTop: '15px'}}>
            <TwitterIcon className={classes.twitterIcon} />
            <Typography className={classes.text}>Log in to Twitter</Typography>
            <Box>
                <TextField className={classes.field} onChange={(e) => onValueChange(e)} name='username' label='Enter User Name' /><br/>
                <TextField className={classes.field} onChange={(e) => onValueChange(e)} name='password' label='Enter Password' /><br/>
                <Button onClick={() => clickHandler()} className={classes.login}>Login</Button>
            </Box>
        </Box>
    )
}

export default SignUp;