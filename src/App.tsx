import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {NavBar} from "./components/navigation/NavBar";
import {Profile} from "./components/profile/Profile";
import {AppWrapperStyled} from "./components/AppWrapper";
import {Route, Routes} from "react-router-dom";
import News from "./components/news/News";
import {Settings} from "./components/settings/Settings";
import {Friends} from "./components/friends/Friends";

import DialogsContainer from "./components/dialogs/DialogsContainer";
import UsersContainer from "./components/users/UsersContainer";

const App = () => {
    return (
        <>
            <Header/>
            <AppWrapperStyled>
                <NavBar/>
                <Routes>
                    <Route path={"/profile"} element={<Profile/>}/>
                    <Route path={"/dialogs/*"} element={<DialogsContainer/>}/>
                    <Route path={"/news"} element={<News/>}/>
                    <Route path={"/friends"} element={<Friends/>}/>
                    <Route path={"/settings"} element={<Settings/>}/>
                    <Route path={"/users"} element={<UsersContainer/>}/>
                </Routes>
            </AppWrapperStyled>

        </>
    );
}
export default App;