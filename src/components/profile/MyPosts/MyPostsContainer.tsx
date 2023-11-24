import {
    AddPostActionCreator,
    InitialProfileStateType,
    UpdateNewTextActionCreator
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppRootStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";
import {InitialDialogStateType} from "../../../redux/dialog-reducer";

type mapStateToPropsType = {
    profilePage: InitialProfileStateType
}

type mapDispatchToPropsType = {
    updateNewPostText: (text: string) => void
    addPost: () => void
}


export type ProfilePropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppRootStateType): mapStateToPropsType=> {
    return {
        profilePage: state.profilePage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType  => {
    return {
        updateNewPostText: (text: string)=> {
            dispatch(UpdateNewTextActionCreator(text))
        },
        addPost: ()=> {
            dispatch(AddPostActionCreator())
        }
    }
}



const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;