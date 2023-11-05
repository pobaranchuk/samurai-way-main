import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {NavBar} from "./components/navigation/NavBar";
import {Profile} from "./components/profile/Profile";
import {AppWrapperStyled} from "./components/AppWrapper";
import Dialogs from "./components/dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";

export type PostType = {
    id: string
    postbody: string
    likesCount: number
}

export type MessageType = {
    id: string
    message: string
}

export type DialogType = {
    id: string
    name: string
}

export type ProfilePageType = {
    posts: PostType[]
    newPostText: string
}

export type DialogPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
}

export type DataType = {
    profilePage: ProfilePageType
    dialogPage: DialogPageType
}

type StateType = {
    addPost: () => void
    updateNewPostText: (value: string) => void
    state: DataType
}

const App: React.FC<StateType> = ({state, addPost, updateNewPostText}) => {
    return (
        <AppWrapperStyled>
            <Header/>
            <NavBar/>
            <Routes>
                <Route path={"/profile"} element={
                    <Profile
                        profilePage={state.profilePage}
                        addPost={addPost}
                        updateNewPostText={updateNewPostText}/>}
                />
                <Route path={"/dialogs/*"} element={<Dialogs dialogs={state.dialogPage.dialogs}
                                                             messages={state.dialogPage.messages}/>}
                />
                {/*<Route path={"/News"} element={<News />}/>*/}
                {/*<Route path={"/Music"} element={<Music />}/>*/}
                {/*<Route path={"/Settings"} element={<Settings />}/>*/}
            </Routes>
        </AppWrapperStyled>
    );
}
export default App;