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
import {ActionsTypes} from "./redux/store";
import {AppRootStateType, StoreType} from "./redux/redux-store";
import DialogsContainer from "./components/dialogs/DialogsContainer";

export type StateType = {
    dispatch: (action: ActionsTypes) => void
    state: AppRootStateType
    store: StoreType
}

const App: React.FC<StateType> = ({store}) => {
    return (
        <>
            <Header/>
            <AppWrapperStyled>
                <NavBar/>
                <Routes>
                    <Route path={"/profile"} element={
                        <Profile store={store}/>}
                    />
                    <Route path={"/dialogs/*"} element={
                        <DialogsContainer store={store}/>}
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