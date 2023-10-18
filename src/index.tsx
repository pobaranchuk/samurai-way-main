import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {GlobalStyled} from "./components/Global.styled";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <GlobalStyled/>
            <App/>
        </BrowserRouter>
    </React.StrictMode>,
  document.getElementById('root')
);