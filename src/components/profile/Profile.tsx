import React from 'react';
import {ProfileStyled} from "./ProfileStyled";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import Posts from "./MyPosts/Posts";
import {ActionsTypes, ProfilePageType} from "../../redux/store";

type ProfileDataType = {
    dispatch: (action: ActionsTypes)=> void
    profilePage: ProfilePageType
}

export const Profile: React.FC<ProfileDataType> = ({profilePage,dispatch}) => {

    return (
        <ProfileStyled>
            <ProfileInfo/>
            <Posts profilePage={profilePage}
                   dispatch={dispatch}/>
        </ProfileStyled>
    );
};

