export const followActionCreator = (userId: number) => {
    return {
        type: "FOLLOW",
        userId
    } as const
}
export const unfollowActionCreator = (userId: number) => {
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

export type UsersType = {
    name: string
    id: number
    uniqueUrlName: string
    photos: {small: string, large: string}
    status: string
    followed: boolean
}

type UserReducerActionsTypes = ReturnType<typeof followActionCreator>
    | ReturnType<typeof unfollowActionCreator>
    | ReturnType<typeof setUsersActionCreator>

let initialState = {
    users: [] as UsersType[]
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
            return {...state, users: [...state.users, ...action.users]}

        default:
            return {...state}
    }
}