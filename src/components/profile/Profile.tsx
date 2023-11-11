import React from 'react';
import {ProfileStyled} from "./ProfileStyled";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import Posts from "./MyPosts/Posts";
import {ActionsTypes, ProfilePageType} from "../../redux/state";

type ProfileDataType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionsTypes)=> void
}

export const Profile: React.FC<ProfileDataType> = ({profilePage,dispatch}) => {

    return (
        <ProfileStyled>
            <ProfileInfo/>
            <Posts profilePage={profilePage}
                   newPostText={profilePage.newPostText}
                   dispatch={dispatch}/>
        </ProfileStyled>
    );
};

