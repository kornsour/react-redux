import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
    async onSearchSubmit(term) {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },
            headers: {
                // WARNING: for tutorial purposes only
                // React environment variables are embedded in the build and publicly accessible
                // 
                // You should only save secrets in your backend
                // The client can send a request to your backend API,
                // which can make the actual API call and send the data back
                Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`
            }
        });

        console.log(response.data.results);
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
            </div>
        );
    }
};

export default App;