import React, {ChangeEvent} from 'react';
import {Button} from "../../buttons/ButtonStyled";
import {Post} from "././Post/Post";
import {InputStyled} from "../ProfileStyled";
import {PostsStyled} from "./PostsStyled";
import {ActionsTypes, ProfilePageType} from "../../../redux/store";
import {AddPostActionCreator, UpdateNewTextActionCreator} from "../../../redux/profile-reducer";

type PostDataType = {
    updateNewPostText: (text:string)=> void
    addPost: ()=> void
    posts: any
    newPostText: string
}


export const MyPosts: React.FC<PostDataType> = ({posts, newPostText, updateNewPostText, addPost}) => {

    const postElement = posts.map(post =>
        <Post id={post.id} postbody={post.postbody} likesCount={post.likesCount}/>)

    const onPostChange = (e:ChangeEvent<HTMLInputElement>) => {
        let text = e.currentTarget.value
        updateNewPostText(text)
    }

    const onAddPost = () => {
        addPost()
    }

    return (
        <PostsStyled>
            <InputStyled value={newPostText} onChange={onPostChange}/>
            <Button onClick={onAddPost}>Add post</Button>
            {postElement}
        </PostsStyled>
    );
};

export default MyPosts;