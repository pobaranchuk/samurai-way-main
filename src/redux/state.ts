import {v1} from "uuid";

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
}

export type RootDataType = {
    profilePage: ProfilePageType
    dialogPage: DialogPageType
}

type AddPostActionType = {
    type: "ADD-POST"
    newPostText: string
}

type ChangeNewTextActionType = {
    type: "UPDATE-NEW-POST-TEXT"
    newText: string
}

export type ActionsTypes = AddPostActionType | ChangeNewTextActionType

export type StoreType = {
    _state: RootDataType
    _callSubscriber: (state: RootDataType) => void
    getState: () => RootDataType
    subscribe: (observer: (state: RootDataType) => void) => void
    dispatch: (action: ActionsTypes) => void
}

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
            ]
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
        if (action.type === "ADD-POST") {
            let newPost: PostType = {
                id: v1(),
                postbody: action.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ""
            this._callSubscriber(this._state)

        } else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state)
        }
    }
}