import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {DialogReducer} from "./dialog-reducer";
import {ProfileReducer} from "./profile-reducer";
import {UserReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import {thunk as thunkMiddleware} from "redux-thunk";
import { reducer as formReducer } from 'redux-form'


let reducer = combineReducers({
    dialogsPage: DialogReducer,
    profilePage: ProfileReducer,
    usersPage: UserReducer,
    auth: authReducer,
    form: formReducer
})

export const store = legacy_createStore(reducer, applyMiddleware(thunkMiddleware))
export type AppRootStateType = ReturnType<typeof reducer>
export type StoreType = typeof store
