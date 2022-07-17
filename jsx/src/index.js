// Import react and react dom libraries
import React from 'react';
import ReactDOM from 'react-dom/client';

// Get a reference to the div with id root
const el = document.getElementById('root');

// Tell react to take control of that element
const root = ReactDOM.createRoot(el);

// Create a component
function App() {
    let message = 'Bye';
    if (Math.random() > 0.5) {
        message = 'Hello';
    }
    return <h1>{message}</h1>;
}

// Show compoment on screen
root.render(<App />);