import axios from 'axios';

// WARNING: for tutorial purposes only
// React environment variables are embedded in the build and publicly accessible
// 
// You should only save secrets in your backend
// The client can send a request to your backend API,
// which can make the actual API call and send the data back
const KEY = `${process.env.REACT_APP_YOUTUBE_API_KEY}`

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});
