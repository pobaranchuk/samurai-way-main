import {combineReducers, legacy_createStore} from "redux";
import {DialogReducer} from "./dialog-reducer";
import {ProfileReducer} from "./profile-reducer";
import {UserReducer} from "./users-reducer";


let reducers = combineReducers({
    dialogsPage: DialogReducer,
    profilePage: ProfileReducer,
    usersPage: UserReducer
})

export const store = legacy_createStore(reducers)
export type AppRootStateType = ReturnType<typeof reducers>
export type StoreType = typeof store