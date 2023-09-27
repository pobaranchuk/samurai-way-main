import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {GlobalStyled} from "./components/Global.styled";

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyled/>
        <App/>
    </React.StrictMode>,
  document.getElementById('root')
);