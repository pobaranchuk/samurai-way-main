import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {NavBar} from "./components/navigation/NavBar";
import {Profile} from "./components/profile/Profile";
import {AppWrapperStyled} from "./components/AppWrapper";
import Dialogs from "./components/dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import News from "./components/news/News";
import {Settings} from "./components/settings/Settings";
import {Friends} from "./components/friends/Friends";
import {ActionsTypes, RootDataType} from "./redux/state";

export type StateType = {
    dispatch: (action: ActionsTypes) => void
    state: RootDataType
}

const App: React.FC<StateType> = ({state, dispatch}) => {
    return (
        <>
            <Header/>
            <AppWrapperStyled>
                <NavBar/>
                <Routes>
                    <Route path={"/profile"} element={
                        <Profile
                            profilePage={state.profilePage}
                            dispatch={dispatch}
                        />}
                    />
                    <Route path={"/dialogs/*"} element={
                        <Dialogs
                            dispatch={dispatch}
                            dialogPage={state.dialogPage}
                        />}
                    />
                    <Route path={"/news"} element={<News/>}/>
                    <Route path={"/friends"} element={<Friends/>}/>
                    <Route path={"/settings"} element={<Settings/>}/>
                </Routes>
            </AppWrapperStyled>

        </>
    );
}
export default App;