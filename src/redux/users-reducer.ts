import {v1} from "uuid";

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
    followed: boolean
    fullName: string
    status: string
    location: UserLocationType
}

type UserReducerActionsTypes = ReturnType<typeof followActionCreator>
    | ReturnType<typeof unfollowActionCreator>
    | ReturnType<typeof setUsersActionCreator>

let initialState = {
    users: [
        {
            id: v1(),
            followed: false,
            fullName: "Slava",
            status: "Yo how are you",
            location: {city: "Warsaw", country: "Poland"}
        },
        {
            id: v1(),
            followed: true,
            fullName: "Mikas",
            status: "Im a boss",
            location: {city: "Kraków", country: "Poland"}
        },
        {
            id: v1(),
            followed: false,
            fullName: "Fredo",
            status: "Yo how are you?",
            location: {city: "Gdansk", country: "Poland"}
        }
    ] as UsersType[]
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