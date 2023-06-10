// 1. Import the React and React-Dom Libraries
import React from 'react';
import ReactDOM from 'react-dom/client';

// 2. Get reference to the div with ID root
const el = document.getElementById('root');

// 3. Tell react to control the element
const root = ReactDOM.createRoot(el);

// 4. Create Component
function App(){
//  If we want to print two variables
    const name = "Prajwal"
    const age = 23
    return(
        <div>
            <h1>Hi my name is {name}</h1>
            <h2>My age is {age}</h2>
        </div>
    );
}

// 5. Show the component on the screen
root.render(<App/>);