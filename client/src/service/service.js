import axios from 'axios';

const url = 'http://localhost:5000/api';

export const authenticateSignup = async (user) => {
    try{
        return await axios.post(`${url}/signup`, user)
    }
    catch(error) {
        console.log('Error while calling signup api', error);
    }
}

export const authenticateLogin = async (user) => {
    try {
        return await axios.post(`${url}/login`, user);
    }
    catch(error) {
        console.log('Error while calling login api', error);
    }
}

export const add_tweet = async (tweet) => {
    try {
        return await axios.post(`${url}/tweet`, tweet);
    }
    catch(error) {
        console.log('Error while calling tweet api', error);
    }
}