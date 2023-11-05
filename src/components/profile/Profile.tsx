import React from 'react';
import {ProfileStyled} from "./ProfileStyled";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import Posts from "./MyPosts/Posts";
import {ProfilePageType} from "../../App";

type ProfileDataType = {
    profilePage: ProfilePageType
    addPost: ()=>void
    updateNewPostText: (value: string) => void
}

export const Profile: React.FC<ProfileDataType> = ({profilePage, addPost, updateNewPostText}) => {

    return (
        <ProfileStyled>
            <ProfileInfo/>
            <Posts profilePage={profilePage}
                   newPostText={profilePage.newPostText}
                   updateNewPostText={updateNewPostText}
                   addPost={addPost}/>
        </ProfileStyled>
    );
};

