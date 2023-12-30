import React from 'react';
import {ProfileStyled} from "./ProfileStyled";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfilePropsType} from "./ProfileContainer";

export const Profile = (props: Partial<ProfilePropsType>) => {
    return (
        <ProfileStyled>
            <ProfileInfo profileInfo={props.profile} {...props}/>
            <MyPostsContainer/>
        </ProfileStyled>
    );
};

