import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {NavBar} from "./components/navigation/NavBar";
import {Profile} from "./components/profile/Profile";
import {AppWrapperStyled} from "./components/AppWrapper";
import Dialogs from "./components/dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";

export type PostType = {
    id: number
    postbody: string
    likesCount: number
}

export type MessageType = {
    id: number
    message: string
}
export type DialogType = {
    id: number
    name: string
}

export type DataType = {
    posts: PostType[]
    dialogs: DialogType[]
    messages: MessageType[]
}

const App: React.FC<DataType> = ({posts, dialogs, messages}) => {
    return (
        <AppWrapperStyled>
            <Header/>
            <NavBar/>
            <Routes>
                <Route path={"/profile"} element={<Profile posts={posts}/>}/>
                <Route path={"/dialogs/*"} element={<Dialogs dialogs={dialogs} messages={messages}/>}/>
                {/*<Route path={"/News"} element={<News />}/>*/}
                {/*<Route path={"/Music"} element={<Music />}/>*/}
                {/*<Route path={"/Settings"} element={<Settings />}/>*/}
            </Routes>
        </AppWrapperStyled>
    );
}
export default App;