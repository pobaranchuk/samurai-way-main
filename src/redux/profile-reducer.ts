import {v1} from "uuid";
import {ActionsTypes} from "./store";

export const AddPostActionCreator = () => {
    return {
        type: "ADD-POST"
    } as const
}
export const UpdateNewTextActionCreator = (newText: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText: newText
    } as const
}


type PostsType = {
    id: string
    postbody: string
    likesCount: number
}
let initialState = {
    posts: [
        {id: v1(), postbody: "Yo how are you", likesCount: 112},
        {id: v1(), postbody: "Yo how are you", likesCount: 13},
        {id: v1(), postbody: "Yo how are you", likesCount: 16},
        {id: v1(), postbody: "Yo how are you", likesCount: 19},
        {id: v1(), postbody: "Yo how are you", likesCount: 109},
        {id: v1(), postbody: "Yo how are you", likesCount: 199}
    ] as PostsType[],
    newPostText: ""
}

export type InitialProfileStateType = typeof initialState

export const ProfileReducer = (state: InitialProfileStateType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case "ADD-POST": {
            let newPost = {id: v1(), postbody: state.newPostText, likesCount: 0}
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            }
        }

        case "UPDATE-NEW-POST-TEXT": {
            return {
                ...state,
                newPostText: action.newText
            }
        }

        default:
            return {...state}
    }
}