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
import {ActionsTypes} from "./redux/store";
import {AppRootStateType, StoreType} from "./redux/redux-store";

export type StateType = {
    dispatch: (action: ActionsTypes) => void
    state: AppRootStateType
    store: StoreType
}

const App: React.FC<StateType> = ({state, dispatch, store}) => {
    return (
        <>
            <Header/>
            <AppWrapperStyled>
                <NavBar/>
                <Routes>
                    <Route path={"/profile"} element={
                        <Profile
                            dispatch={dispatch}
                            profilePage={state.profilePage}
                        />}
                    />
                    <Route path={"/dialogs/*"} element={
                        <Dialogs
                            dispatch={dispatch}
                            store={store}
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