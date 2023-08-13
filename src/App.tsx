import React from 'react';
import './App.css';


function App() {
    return (
        <div>
            <AppTitle/>
            <Rating/>
            <Accordion/>
            <Rating/>
        </div>
    );
}

function Star() {
    console.log("star rendered")
    return (
        <div>star</div>
    )
}

function AppTitle() {
    return <>This is component APP</>
}

function Rating() {
    return (
        <>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </>
    )
}

function Accordion() {
    return (
        <div>
            <AccordionTitle/>
            <AccordionBody/>
        </div>
    )
}

function AccordionTitle() {
    console.log("Accordion title is rendering...")
    return <h3>Menu</h3>
}

function AccordionBody() {
    console.log("Accordion body is rendering...")
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default App;