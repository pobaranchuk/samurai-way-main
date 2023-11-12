import {v1} from "uuid";
import {AddPostActionCreator, ChangeNewTextActionCreator, ProfileReducer} from "./profile-reducer";
import {DialogReducer, SendMessageCreator, UpdateNewMessageBodyCreator} from "./dialog-reducer";

export type PostType = {
    id: string
    postbody: string
    likesCount: number
}

export type MessageType = {
    id: string
    message: string
}

export type DialogType = {
    id: string
    name: string
}

export type ProfilePageType = {
    posts: PostType[]
    newPostText: string
}

export type DialogPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
    newMessageBody: string
}

export type RootDataType = {
    profilePage: ProfilePageType
    dialogPage: DialogPageType
}

export type StoreType = {
    _state: RootDataType
    _callSubscriber: (state: RootDataType) => void
    getState: () => RootDataType
    subscribe: (observer: (state: RootDataType) => void) => void
    dispatch: (action: ActionsTypes) => void
}

export type ActionsTypes = ReturnType<typeof AddPostActionCreator>
    | ReturnType<typeof ChangeNewTextActionCreator>
    | ReturnType<typeof UpdateNewMessageBodyCreator>
    | ReturnType<typeof SendMessageCreator>



export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: v1(), postbody: "Yo how are you", likesCount: 112},
                {id: v1(), postbody: "Yo how are you", likesCount: 13},
                {id: v1(), postbody: "Yo how are you", likesCount: 16},
                {id: v1(), postbody: "Yo how are you", likesCount: 19},
                {id: v1(), postbody: "Yo how are you", likesCount: 109},
                {id: v1(), postbody: "Yo how are you", likesCount: 199}
            ],
            newPostText: ""
        },
        dialogPage: {
            dialogs: [
                {id: v1(), name: "Slava"},
                {id: v1(), name: "Andrey"},
                {id: v1(), name: "Sergey"},
                {id: v1(), name: "Asia"},
                {id: v1(), name: "Bohdan"},
                {id: v1(), name: "Max"}
            ],
            messages: [
                {id: v1(), message: "Yo how are you"},
                {id: v1(), message: "Yo how are you"},
                {id: v1(), message: "Yo how are you"},
                {id: v1(), message: "Yo how are you"},
                {id: v1(), message: "Yo how are you"},
                {id: v1(), message: "Yo how are you"}
            ],
            newMessageBody: ""
        }
    },
    _callSubscriber(state) {
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        this._state.profilePage = ProfileReducer(this._state.profilePage, action)
        this._state.dialogPage = DialogReducer(this._state.dialogPage, action)

        this._callSubscriber(this._state);
    }

    // dispatch(action) {
    //     if (action.type === "ADD-POST") {
    //         let newPost: PostType = {
    //             id: v1(),
    //             postbody: action.newPostText,
    //             likesCount: 0
    //         }
    //         this._state.profilePage.posts.push(newPost)
    //         this._state.profilePage.newPostText = ""
    //         this._callSubscriber(this._state)
    //     } else if (action.type === "UPDATE-NEW-POST-TEXT") {
    //         this._state.profilePage.newPostText = action.newText
    //         this._callSubscriber(this._state)
    //     } else if (action.type === "UPDATE-NEW-MESSAGE-BODY") {
    //         this._state.dialogPage.newMessageBody = action.body
    //         this._callSubscriber(this._state)
    //     } else if (action.type === "SEND-MESSAGE") {
    //         let body = this._state.dialogPage.newMessageBody
    //         this._state.dialogPage.newMessageBody = ""
    //         this._state.dialogPage.messages.push({id: v1(), message: body})
    //         this._callSubscriber(this._state)
    //     }
    // }
}