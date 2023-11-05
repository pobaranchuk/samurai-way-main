import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {GlobalStyled} from "./components/Global.styled";
import {BrowserRouter} from "react-router-dom";
import {store} from "./redux/state";


let renderEntireTree = (state)=> {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <GlobalStyled/>
                <App state={state}
                     addPost={store.addPost.bind(store)}
                     updateNewPostText={store.updateNewPostText.bind(store)}
                />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
renderEntireTree(store.getState())
store.subscribe(renderEntireTree)