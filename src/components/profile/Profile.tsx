import React from 'react';
import {InputNewsField, ProfileStyled} from "./ProfileStyled";
import {Post} from "./MyPosts/Post";
import {Button} from "../buttons/ButtonStyled";

export const Profile = () => {
    return (
        <ProfileStyled>
            <InputNewsField/>
            <Button>Add post</Button>
            <Button>Remove</Button>
            <div>
                Avatar + description
            </div>
            <Post postbody={"My first post"}/>
            <Post postbody={"My second post"}/>
            <Post postbody={"My third post"}/>
        </ProfileStyled>
    );
};

