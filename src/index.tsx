import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {RootDataType} from './redux/store';
import {GlobalStyled} from "./components/Global.styled";
import {BrowserRouter} from "react-router-dom";
import {store} from "./redux/redux-store";
import App from "./App";
import StoreContext, {Provider} from "./StoreContext";


let renderEntireTree = (state: RootDataType)=> {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <GlobalStyled/>
                <Provider store={store}>
                    <App />
                </Provider>

            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
renderEntireTree(store.getState())
store.subscribe(()=> {
    let state = store.getState()
    renderEntireTree(state)
})