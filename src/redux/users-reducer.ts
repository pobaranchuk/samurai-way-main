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
export const setCurrentPageActionCreator = (currentPage: number) => {
    return {
        type: "SET_CURRENT_PAGE",
        currentPage
    } as const
}
export const setTotalUsersCountActionCreator = (count: number) => {
    return {
        type: "SET_TOTAL_USERS_COUNT",
        count
    } as const
}

export type UsersType = {
    name: string
    id: number
    uniqueUrlName: string
    photos: { small: string, large: string }
    status: string
    followed: boolean
}

type UserReducerActionsTypes = ReturnType<typeof followActionCreator>
    | ReturnType<typeof unfollowActionCreator>
    | ReturnType<typeof setUsersActionCreator>
    | ReturnType<typeof setCurrentPageActionCreator>
    | ReturnType<typeof setTotalUsersCountActionCreator>

let initialState = {
    users: [] as UsersType[],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
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

        default:
            return {...state}
    }
}