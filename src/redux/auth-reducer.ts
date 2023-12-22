const initialSate = {
    auth: {
        id: null as number,
        email: null as string,
        login: null as string,
        isAuth: false as boolean
    }
}
export type initialAuthSateType = typeof initialSate

type ActionType = ReturnType<typeof setAuthUserData>

export const authReducer = (state: initialAuthSateType = initialSate, action: ActionType) => {
    switch (action.type) {
        case "SET-USER-DATA": {
            return {
                ...state,
                auth: {...action.data, isAuth: true}
            }
        }
        default:
            return state
    }
}

export const setAuthUserData = (userId: number, email: string, login: string) => {
    return {type: "SET-USER-DATA" as const, data: {userId, email, login}}
}