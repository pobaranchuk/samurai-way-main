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
            //state.posts.push();
            let stateCopy = {...state}
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(newPost)
            stateCopy.newPostText = "";
            return stateCopy
        }

        case "UPDATE-NEW-POST-TEXT": {
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText
            return stateCopy
        }


        default:
            // Handle unknown action type
            return {...state}
    }
};