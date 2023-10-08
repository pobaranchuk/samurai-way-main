import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {NavBar} from "./components/navigation/NavBar";
import {Profile} from "./components/profile/Profile";
import {AppWrapperStyled} from "./components/AppWrapper";
import Dialogs from "./components/dialogs/Dialogs";
function App() {
    return (
        <AppWrapperStyled>
            <Header/>
            <NavBar/>
            <Profile/>
            <Dialogs/>
        </AppWrapperStyled>
    );
}
export default App;