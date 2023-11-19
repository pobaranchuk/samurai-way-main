import {combineReducers, legacy_createStore} from "redux";
import {DialogReducer} from "./dialog-reducer";
import {ProfileReducer} from "./profile-reducer";

let reducers = combineReducers({
    DialogReducer: DialogReducer,
    ProfileReducer: ProfileReducer
})


export const store = legacy_createStore(reducers)