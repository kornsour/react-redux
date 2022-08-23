import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
    state = { lat: null, errorMessage: '' };

    // Use this method for loading data
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            // whenever we want to update state, use setState
            // DO NOT use something like this.state.lat = position.coords.latitude
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        );
    }
    
    // Always put conditional logic in a helper method instead of the render method
    // That way, we don't have to wrap every return statement
    renderContent() {
        if (this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>
        }
        
        if (!this.state.errorMessage && this.state.lat) {
            // taking state from component and passing down to child as a prop
            return <SeasonDisplay lat={this.state.lat} />
        }

        return <Spinner message="Please accept location request..." />;
    }

    // React requires us to define the render method
    render() {
        return (
            <div className="example wrapper">
                {this.renderContent()}
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);