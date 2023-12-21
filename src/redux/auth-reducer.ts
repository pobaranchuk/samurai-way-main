import React from "react"

const initialSate = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}


export const authReducer = (state = initialSate, action) => {
    switch (action.type) {
        case "SET-USER-DATA": {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        default:
            return state

    }
}

export const setAuthUserData = (userId, email, login) => {
    return {type: "SET-USER-DATA" as const, data: {userId, email, login}}
}