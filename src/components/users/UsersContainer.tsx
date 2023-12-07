import {connect} from "react-redux";
import {
    followActionCreator,
    InitialUsersStateType,
    setUsersActionCreator,
    unfollowActionCreator, UsersType
} from "../../redux/users-reducer";
import {AppRootStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import UsersClass from "./UsersClass";

type mapStateToPropsType = {
    usersPage: InitialUsersStateType
}

type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UsersType[]) => void
}

export type UsersPropsType =  mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
    return {
        usersPage: state.usersPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followActionCreator(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowActionCreator(userId))
        },
        setUsers: (users: UsersType[]) => {
            dispatch(setUsersActionCreator(users))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersClass);