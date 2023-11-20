import {AddPostActionCreator, UpdateNewTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppRootStateType} from "../../../redux/redux-store";

const mapStateToProps = (state: AppRootStateType)=> {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        updateNewPostText: (text: string)=> {
            let action = UpdateNewTextActionCreator(text)
            dispatch(action)
        },
        addPost: ()=> {
            dispatch(AddPostActionCreator())
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;