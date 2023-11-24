import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {GlobalStyled} from "./components/Global.styled";
import {BrowserRouter} from "react-router-dom";
import {store} from "./redux/redux-store";
import App from "./App";
import {Provider} from "react-redux";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <GlobalStyled/>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
)
