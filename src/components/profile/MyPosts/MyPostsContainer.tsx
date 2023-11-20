import React, {ChangeEvent} from 'react';
import {Button} from "../../buttons/ButtonStyled";
import {Post} from "././Post/Post";
import {InputStyled} from "../ProfileStyled";
import {PostsStyled} from "./PostsStyled";
import {ActionsTypes, ProfilePageType} from "../../../redux/store";
import {AddPostActionCreator, UpdateNewTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {StoreType} from "../../../redux/redux-store";
import StoreContext from "../../../StoreContext";

type PostDataType = {
    store: StoreType
}

export const MyPostsContainer: React.FC<PostDataType> = ({store}) => {
    return (
        <StoreContext.Consumer>
            {
            (store) => {
                let state = store.getState()

                const onPostChange = (text: string) => {
                    let action = UpdateNewTextActionCreator(text)
                    store.dispatch(action)
                }

                const addPost = () => {
                    store.dispatch(AddPostActionCreator(store.getState().profilePage.newPostText))
                }

                return <MyPosts
                    updateNewPostText={onPostChange}
                    addPost={addPost}
                    posts={state.profilePage.posts}
                    newPostText={state.profilePage.newPostText}/>
            }
        }
        </StoreContext.Consumer>
    );
};

export default MyPostsContainer;