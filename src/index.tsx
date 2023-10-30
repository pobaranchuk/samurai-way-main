import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {GlobalStyled} from "./components/Global.styled";
import {BrowserRouter} from "react-router-dom";


let postData = [
    {id: 1, postbody: "Yo how are you", likesCount: 112},
    {id: 2, postbody: "Yo how are you", likesCount: 13},
    {id: 3, postbody: "Yo how are you", likesCount: 16},
    {id: 4, postbody: "Yo how are you", likesCount: 19},
    {id: 5, postbody: "Yo how are you", likesCount: 109},
    {id: 6, postbody: "Yo how are you", likesCount: 199}
]

let dialogData = [
    {id: 1, name: "Slava"},
    {id: 2, name: "Andrey"},
    {id: 3, name: "Sergey"},
    {id: 4, name: "Asia"},
    {id: 5, name: "Bohdan"},
    {id: 6, name: "Max"}
]
let messageData = [
    {id: 1, message: "Yo how are you"},
    {id: 2, message: "Yo how are you"},
    {id: 3, message: "Yo how are you"},
    {id: 4, message: "Yo how are you"},
    {id: 5, message: "Yo how are you"},
    {id: 6, message: "Yo how are you"}
]

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <GlobalStyled/>
            <App posts={postData} dialogs={dialogData} messages={messageData}/>
        </BrowserRouter>
    </React.StrictMode>,
  document.getElementById('root')
);