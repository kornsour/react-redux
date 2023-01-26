import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        // WARNING: for tutorial purposes only
        // React environment variables are embedded in the build and publicly accessible
        // 
        // You should only save secrets in your backend
        // The client can send a request to your backend API,
        // which can make the actual API call and send the data back
        Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`
    }
})