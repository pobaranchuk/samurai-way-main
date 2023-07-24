import React from 'react';
import logo from './logo512.png';
import './App.css';
// import Technologies from "./Technologies";
import Abra from "./Header";


function App() {
    return (
        <div>
            {/*<Header/>*/}
            <Abra/>
        </div>
    );
}

export default App;

// Setup
function abbrevName(name){
    let newName = "";
    let fName = name.split(" ")[0][0];
    let lName = name.split(" ")[1][0];
    newName = fName + "." + lName;
    newName = newName.toUpperCase();
    debugger;
    return newName;
}

console.log(abbrevName("fYuLWGQRVH ygvLLJzO"))
