import React, {ChangeEvent, useState} from 'react';
import {Button} from "../../buttons/ButtonStyled";
import {Post} from "./Post";
import {InputStyled} from "../ProfileStyled";
import {PostsStyled} from "./PostsStyled";
import {PostType} from "../../../App";
import {v1} from "uuid";

type PostDataType = {
    postData: PostType[]
}
export const Posts: React.FC<PostDataType> = ({postData}) => {

    const [posts, setPosts] = useState(postData)

    const [value, setValue] = useState("")

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    const AddPostHandler = () => {
        let newPost = {id: v1(), postbody: value, likesCount: 0}
        setPosts([...posts, newPost])
        setValue("")
    }

    const removePostHandler = (id: string) => {
        setPosts(posts.filter(p => p.id !== id))
    }

    const postElement = posts.map(post => <Post post={post} removePost={removePostHandler}/>)

    return (
        <PostsStyled>
            <InputStyled value={value} onChange={onChangeHandler}/>
            <Button onClick={AddPostHandler}>Add post</Button>
            {postElement}
        </PostsStyled>
    );
};

export default Posts;