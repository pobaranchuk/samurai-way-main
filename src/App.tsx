import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {NavBar} from "./components/navigation/NavBar";
import {Profile} from "./components/profile/Profile";
import {AppWrapperStyled} from "./components/AppWrapper";
function App() {
    return (
        <AppWrapperStyled>
            <Header/>
            <NavBar/>
            <Profile/>
        </AppWrapperStyled>
    );
}
export default App;