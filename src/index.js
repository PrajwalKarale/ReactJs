// 1. Import the React and React-Dom Libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// 2. Get reference to the div with ID root
const el = document.getElementById('root');

// 3. Tell react to control the element
const root = ReactDOM.createRoot(el);

// 4. Create Component

// 5. Show the component on the screen
root.render(<App/>);