function App(){
    //  If we want to print two variables
        const name = "Prajwal Karale";
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

    export default App;