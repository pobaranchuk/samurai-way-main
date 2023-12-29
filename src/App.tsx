import React from 'react';
import './App.css';
import {NavBar} from "./components/navigation/NavBar";
import {AppWrapperStyled} from "./components/AppWrapper";
import {Route, Routes} from "react-router-dom";
import News from "./components/news/News";
import {Settings} from "./components/settings/Settings";
import {Friends} from "./components/friends/Friends";

import DialogsContainer from "./components/dialogs/DialogsContainer";
import UsersContainer from "./components/users/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import LoginPage from "./components/login/Login";

const App = () => {
    return (
        <>
            <HeaderContainer/>
            <AppWrapperStyled>
                <NavBar/>
                <Routes>
                    <Route path={"/profile/:id?"} element={<ProfileContainer/>}/>
                    <Route path={"/dialogs/*"} element={<DialogsContainer/>}/>
                    <Route path={"/news"} element={<News/>}/>
                    <Route path={"/friends"} element={<Friends/>}/>
                    <Route path={"/settings"} element={<Settings/>}/>
                    <Route path={"/users"} element={<UsersContainer/>}/>
                    <Route path={"/login"} element={<LoginPage/>}/>
                </Routes>
            </AppWrapperStyled>

        </>
    );
}
export default App;