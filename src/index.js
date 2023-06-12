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
    const name = "Prajwal";
    const age = 23;
    const message = "Enter age";
    return(
        <div>
            <h1>Hi my name is {name}</h1>
            <h2>My age is {age}</h2>
            {/* Customizing Elements with prop */}
            <br></br>
            <div>
                <input 
                type='number'
                min={5}
                max={10}
                list={[1,2,3]}
                style={{color:'red'}}
                alt={message}
                ></input>
            </div>
            <hr></hr>
            <div>
                <p>Video lecture regarding Converting HTML to JSX</p>
                <textarea autoFocus = {true}></textarea>
                <p>In JSX boolean 'true' can be written with the property name whether as False should be written in curly braces</p>
                <input spellCheck={true}></input><hr></hr>
                <input placeholder='hi there'></input>
            </div>
        </div>
    );
}

// 5. Show the component on the screen
root.render(<App/>);