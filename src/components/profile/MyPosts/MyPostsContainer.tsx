import {
    AddPostActionCreator,
    InitialProfileStateType
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppRootStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";

type mapStateToPropsType = {
    profilePage: InitialProfileStateType
}

type mapDispatchToPropsType = {
    addPost: (newPostText: string) => void
}


export type ProfilePropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppRootStateType): mapStateToPropsType=> {
    return {
        profilePage: state.profilePage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType  => {
    return {
        addPost: (newPostText: string)=> {
            dispatch(AddPostActionCreator(newPostText))
        }
    }
}



const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;