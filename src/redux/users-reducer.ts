import {usersAPI} from "../api/api";
import {Dispatch} from "redux";

export type UsersType = {
    name: string
    id: number
    uniqueUrlName: string
    photos: { small: string, large: string }
    status: string
    followed: boolean
}

let initialState = {
    users: [] as UsersType[],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

export type InitialUsersStateType = typeof initialState

export const UserReducer = (state: InitialUsersStateType = initialState, action: UserReducerActionsTypes) => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(user => user.id === action.userId ? {...user, followed: true} : user)
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(user => user.id === action.userId ? {...user, followed: false} : user)
            }
        case "SET_USERS":
            return {...state, users: action.users}

        case "SET_CURRENT_PAGE":
            return {...state, currentPage: action.currentPage}

        case "SET_TOTAL_USERS_COUNT":
            return {...state, totalUsersCount: action.count}

        case "TOGGLE-IS-FETCHING":
            return {...state, isFetching: action.isFetching}

        case "TOGGLE-IS-FOLLOWING-PROGRESS":
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : [state.followingInProgress.filter(id => id !== action.userId)]

            }

        default:
            return {...state}
    }
}

export const followSuccess = (userId: number) => {
    return {type: "FOLLOW", userId} as const
}
export const unfollowSuccess = (userId: number) => {
    return {type: "UNFOLLOW", userId} as const
}
export const setUsers = (users: UsersType[]) => {
    return {type: "SET_USERS", users} as const
}
export const setCurrentPage = (currentPage: number) => {
    return {type: "SET_CURRENT_PAGE", currentPage} as const
}
export const setTotalUsersCount = (count: number) => {
    return {type: "SET_TOTAL_USERS_COUNT", count} as const
}

export const setToggleIsFetching = (isFetching: boolean) => {
    return {type: "TOGGLE-IS-FETCHING", isFetching} as const
}
export const setToggleIsFollowingProgress = (isFetching: boolean, userId: number) => {
    return {type: "TOGGLE-IS-FOLLOWING-PROGRESS", isFetching, userId} as const
}


export const getUsers = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch) => {

        dispatch(setToggleIsFetching(true))
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(setToggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
            dispatch(setCurrentPage(currentPage))
        })
    }
}

export const follow = (userId: number) => {
    return (dispatch: Dispatch) => {
        dispatch(setToggleIsFollowingProgress(true, userId))
        usersAPI.follow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followSuccess(userId))
                }
                dispatch(setToggleIsFollowingProgress(false, userId))
            })
    }
}
export const unfollow = (userId: number) => {
    return (dispatch: Dispatch) => {
        dispatch(setToggleIsFollowingProgress(true, userId))
        usersAPI.unfollow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollowSuccess(userId))
                }
                dispatch(setToggleIsFollowingProgress(false, userId))
            })
    }
}


type UserReducerActionsTypes = ReturnType<typeof followSuccess>
    | ReturnType<typeof unfollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof setToggleIsFetching>
    | ReturnType<typeof setToggleIsFollowingProgress>