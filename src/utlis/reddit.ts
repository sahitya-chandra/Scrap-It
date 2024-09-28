import axios from "axios";
import dotenv  from 'dotenv';

dotenv.config();

const clientId = process.env.REDDIT_CLIENT_ID;
const clientSecret = process.env.REDDIT_CLIENT_SECRET;
const username = process.env.REDDIT_USERNAME || '';
const password = process.env.REDDIT_PASSWORD || '';

const getRedditAccessToken = async () => {

    const authString = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

    try {
        const res = await axios.post('https://www.reddit.com/api/v1/access_token', 
            new URLSearchParams({
              grant_type: 'password',
              username: username,
              password: password,
            }),
            {
            headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: `Basic ${authString}`,
            }
        })
          
        console.log(res.data.access_token)
        return res.data.access_token;
    } catch(err) {
        console.log('Failed to get access token:', err);
        return null;
    }
}

export default getRedditAccessToken;