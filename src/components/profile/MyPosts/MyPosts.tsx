import React from 'react';
import {Button} from "../../buttons/ButtonStyled";
import {Post} from "./Post/Post";
import {PostsStyled} from "./PostsStyled";
import {ProfilePropsType} from "./MyPostsContainer";
import {Field, reduxForm} from "redux-form";


export const MyPosts: React.FC<ProfilePropsType> = ({profilePage, addPost}) => {

    const posts = profilePage.posts
    const postElement = posts.map(post =>
        <Post key={post.id} id={post.id} postbody={post.postbody} likesCount={post.likesCount}/>)

    const onAddPost = (values: any) => {
        addPost(values.newPostText)
    }

    return (
        <PostsStyled>
            <h3>My Posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            {postElement}
        </PostsStyled>
    );
};

const AddNewPostForm = (props: any) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <Field component={"textarea"} name={"newPostText"}/>
                <Button>Add post</Button>
            </form>
        </div>
    );
};

const AddNewPostFormRedux = reduxForm({form: "AddNewPostForm"})(AddNewPostForm)

export default MyPosts;