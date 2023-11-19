import {combineReducers, legacy_createStore} from "redux";
import {DialogReducer} from "./dialog-reducer";
import {ProfileReducer} from "./profile-reducer";


let reducers = combineReducers({
    dialogPage: DialogReducer,
    profilePage: ProfileReducer
})

export const store = legacy_createStore(reducers)
export type AppRootStateType = ReturnType<typeof reducers>
export type StoreType = typeof store