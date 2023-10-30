import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {GlobalStyled} from "./components/Global.styled";
import {BrowserRouter} from "react-router-dom";
import {state} from "./redux/state";



ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <GlobalStyled/>
            <App state={state}/>
        </BrowserRouter>
    </React.StrictMode>,
  document.getElementById('root')
);