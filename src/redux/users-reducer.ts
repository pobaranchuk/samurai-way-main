export const followActionCreator = (userId: string) => {
    return {
        type: "FOLLOW",
        userId
    } as const
}
export const unfollowActionCreator = (userId: string) => {
    return {
        type: "UNFOLLOW",
        userId
    } as const
}
export const setUsersActionCreator = (users: UsersType[]) => {
    return {
        type: "SET_USERS",
        users
    } as const
}

type UserLocationType = {
    city: string
    country: string
}
export type UsersType = {
    id: string
    photoUrl: string,
    followed: boolean
    fullName: string
    status: string
    location: UserLocationType
}

type UserReducerActionsTypes = ReturnType<typeof followActionCreator>
    | ReturnType<typeof unfollowActionCreator>
    | ReturnType<typeof setUsersActionCreator>

let initialState = {
    users: [] as UsersType[]
}

export type InitialUsersStateType = typeof initialState

export const UserReducer = (state: InitialUsersStateType = initialState, action: UserReducerActionsTypes) => {
    debugger
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
            return {...state, users: [...state.users, ...action.users]}

        default:
            return {...state}
    }
}