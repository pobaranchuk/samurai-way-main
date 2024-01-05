import React from 'react';
import {Button} from "../../buttons/ButtonStyled";
import {Post} from "./Post/Post";
import {PostsStyled} from "./PostsStyled";
import {ProfilePropsType} from "./MyPostsContainer";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validator";
import {Textarea} from "../../common/formsControls/formsControl";


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

const maxLength10 = maxLengthCreator(10)

const AddNewPostForm = (props: any) => {

    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <Field component={Textarea} placeholder={"Post message"} name={"newPostText"}
                       validate={[required, maxLength10]}/>
                <Button>Add post</Button>
            </form>
        </div>
    );
};

const AddNewPostFormRedux = reduxForm({form: "AddNewPostForm"})(AddNewPostForm)

export default MyPosts;