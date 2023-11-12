import React from 'react';
import {Button} from "../../buttons/ButtonStyled";
import {Post} from "./Post";
import {InputStyled} from "../ProfileStyled";
import {PostsStyled} from "./PostsStyled";
import {ActionsTypes, AddPostActionCreator, ChangeNewTextActionCreator, ProfilePageType} from "../../../redux/state";

type PostDataType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionsTypes)=> void
    newPostText: string
}


export const Posts: React.FC<PostDataType> = ({profilePage, dispatch, newPostText}) => {

    const postElement = profilePage.posts.map(post => <Post id={post.id} postbody={post.postbody}
                                                            likesCount={post.likesCount}/>)

    let newPostElement = React.createRef<HTMLInputElement>()

    const addPostHandler = () => {
        dispatch(AddPostActionCreator(newPostText))
    }

    const onPostChange = () => {
        let text = newPostElement.current.value
        //let action = {type: "UPDATE-NEW-POST-TEXT", newText: text}as const;
        dispatch(ChangeNewTextActionCreator(text))
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