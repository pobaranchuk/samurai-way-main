import React, {ChangeEvent} from 'react';
import {Button} from "../../buttons/ButtonStyled";
import {Post, PostType} from "././Post/Post";
import {InputStyled} from "../ProfileStyled";
import {PostsStyled} from "./PostsStyled";
import {ActionsTypes, ProfilePageType} from "../../../redux/store";
import {AddPostActionCreator, UpdateNewTextActionCreator} from "../../../redux/profile-reducer";
import {ProfilePropsType} from "./MyPostsContainer";

type PostDataType = {
    updateNewPostText: (text: string) => void
    addPost: () => void
    posts: PostType[]
    newPostText: string
}


export const MyPosts: React.FC<ProfilePropsType> = ({profilePage, updateNewPostText, addPost}) => {

    const posts = profilePage.posts
    const postElement = posts.map(post =>
        <Post key={post.id} id={post.id} postbody={post.postbody} likesCount={post.likesCount}/>)

    const onPostChange = (e: ChangeEvent<HTMLInputElement>) => {
        let text = e.currentTarget.value
        updateNewPostText(text)
    }

    const onAddPost = () => {
        addPost()
    }

    return (
        <PostsStyled>
            <InputStyled value={profilePage.newPostText} onChange={onPostChange}/>
            <Button onClick={onAddPost}>Add post</Button>
            {postElement}
        </PostsStyled>
    );
};

export default MyPosts;