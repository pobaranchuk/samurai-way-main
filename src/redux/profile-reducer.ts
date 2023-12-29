import {v1} from "uuid";
import {Dispatch} from "redux";
import {usersAPI} from "../api/api";

export const AddPostActionCreator = () => {
    return {type: "ADD-POST"} as const
}
export const UpdateNewTextActionCreator = (newText: string) => {
    return {type: "UPDATE-NEW-POST-TEXT", newText: newText} as const
}

const setUserProfile = (profile: UserProfileType) => {
    return {type: "SET-USER-PROFILE", profile} as const
}
export const getUserProfile = (userId: string) => (dispatch: Dispatch) => {
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data))
        })
}

type ActionsTypes = ReturnType<typeof AddPostActionCreator>
    | ReturnType<typeof UpdateNewTextActionCreator>
    | ReturnType<typeof setUserProfile>


type PostsType = {
    id: string
    postbody: string
    likesCount: number
}

export type UserProfileType = {
    userId: number;
    lookingForAJob: boolean;
    lookingForAJobDescription: string;
    fullName: string;
    contacts: {
        github: string;
        vk: string;
        facebook: string;
        instagram: string;
        twitter: string;
        website: string;
        youtube: string;
        mainLink: string;
    };
    photos: {
        small: string | null;
        large: string | null;
    };
};

let initialState = {
    posts: [
        {id: v1(), postbody: "Yo how are you", likesCount: 112},
        {id: v1(), postbody: "Yo how are you", likesCount: 13},
        {id: v1(), postbody: "Yo how are you", likesCount: 16},
        {id: v1(), postbody: "Yo how are you", likesCount: 19},
        {id: v1(), postbody: "Yo how are you", likesCount: 109},
        {id: v1(), postbody: "Yo how are you", likesCount: 199}
    ] as PostsType[],
    newPostText: "",
    profile: null as UserProfileType
}

export type InitialProfileStateType = typeof initialState

export const ProfileReducer = (state: InitialProfileStateType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case "ADD-POST": {
            let newPost = {id: v1(), postbody: state.newPostText, likesCount: 0}
            return {...state, posts: [...state.posts, newPost], newPostText: ""}
        }
        case "UPDATE-NEW-POST-TEXT": {
            return {...state, newPostText: action.newText}
        }
        case "SET-USER-PROFILE": {
            return {...state, profile: action.profile}
        }
        default:
            return {...state}
    }
}