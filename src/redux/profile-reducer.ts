import {v1} from "uuid";

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

let initialState = {
    posts: [
        {id: v1(), postbody: "Yo how are you", likesCount: 112},
        {id: v1(), postbody: "Yo how are you", likesCount: 13},
        {id: v1(), postbody: "Yo how are you", likesCount: 16},
        {id: v1(), postbody: "Yo how are you", likesCount: 19},
        {id: v1(), postbody: "Yo how are you", likesCount: 109},
        {id: v1(), postbody: "Yo how are you", likesCount: 199}
    ],
    newPostText: ""
}

export type InitialProfileStateType = typeof initialState

export const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD-POST":
            let newPost = {id: v1(), postbody: state.newPostText, likesCount: 0}
            //state.posts.push();
            state.newPostText = "";
            return {
                ...state,
                posts: {
                    ...state.posts,
                    newPost
                }
            }

        case "UPDATE-NEW-POST-TEXT":
            //state.newPostText = action.newText;
            return {
                ...state,
                newPostText: action.newText
            }

        default:
            // Handle unknown action type
            return {...state}
    }
};