import React, {ChangeEvent} from 'react';
import {Button} from "../../buttons/ButtonStyled";
import {Post} from "./Post";
import {InputStyled} from "../ProfileStyled";
import {PostsStyled} from "./PostsStyled";
import {ProfilePageType} from "../../../App";

type PostDataType = {
    profilePage: ProfilePageType
    addPost: ()=> void
    updateNewPostText: (value: string)=> void
    newPostText:string
}
export const Posts: React.FC<PostDataType> = ({profilePage, addPost, newPostText, updateNewPostText}) => {

    const postElement = profilePage.posts.map(post => <Post id={post.id} postbody={post.postbody} likesCount={post.likesCount}/>)

    let newPostElement = React.createRef<HTMLInputElement>()

    const addPostHandler = () => {
        addPost()
    }

    const onPostChange = () => {
        let text = newPostElement.current.value
        updateNewPostText(text)
    }

    return (
        <PostsStyled>
            <InputStyled value={newPostText} onChange={onPostChange} ref={newPostElement}/>
            <Button onClick={addPostHandler}>Add post</Button>
            {postElement}
        </PostsStyled>
    );
};

export default Posts;