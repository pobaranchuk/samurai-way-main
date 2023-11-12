import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {RootDataType} from './redux/store';
import {GlobalStyled} from "./components/Global.styled";
import {BrowserRouter} from "react-router-dom";
import {store} from "./redux/store";
import App from "./App";


let renderEntireTree = (state: RootDataType)=> {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <GlobalStyled/>
                <App state={state}
                     dispatch={store.dispatch.bind(store)}
                />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
renderEntireTree(store.getState())
store.subscribe(renderEntireTree)