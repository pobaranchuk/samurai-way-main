import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {NavBar} from "./components/navigation/NavBar";
import {Profile} from "./components/profile/Profile";
import {AppWrapperStyled} from "./components/AppWrapper";
import Dialogs from "./components/dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
function App() {
    return (
            <AppWrapperStyled>
                <Header/>
                <NavBar/>
                <Routes>
                    <Route path={"/profile"} element={<Profile/>}/>
                    <Route path={"/dialogs/*"} element={<Dialogs />}/>
                    {/*<Route path={"/News"} element={<News />}/>*/}
                    {/*<Route path={"/Music"} element={<Music />}/>*/}
                    {/*<Route path={"/Settings"} element={<Settings />}/>*/}
                </Routes>
            </AppWrapperStyled>
    );
}
export default App;