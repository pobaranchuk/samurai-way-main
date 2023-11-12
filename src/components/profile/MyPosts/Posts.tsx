import React, {ChangeEvent} from 'react';
import {Button} from "../../buttons/ButtonStyled";
import {Post} from "./Post";
import {InputStyled} from "../ProfileStyled";
import {PostsStyled} from "./PostsStyled";
import {ActionsTypes, AddPostActionCreator, ChangeNewTextActionCreator, ProfilePageType} from "../../../redux/state";

type PostDataType = {
    dispatch: (action: ActionsTypes)=> void
    profilePage: ProfilePageType
}


export const Posts: React.FC<PostDataType> = ({dispatch, profilePage}) => {

    const postElement = profilePage.posts.map(post =>
        <Post id={post.id} postbody={post.postbody} likesCount={post.likesCount}/>)

    const onPostChange = (e:ChangeEvent<HTMLInputElement>) => {
        let text = e.currentTarget.value
        //let action = {type: "UPDATE-NEW-POST-TEXT", newText: text}as const;
        dispatch(ChangeNewTextActionCreator(text))
    }

    const addPostHandler = () => {
        dispatch(AddPostActionCreator(profilePage.newPostText))
    }

    return (
        <PostsStyled>
            <InputStyled value={profilePage.newPostText} onChange={onPostChange}/>
            <Button onClick={addPostHandler}>Add post</Button>
            {postElement}
        </PostsStyled>
    );
};

export default Posts;