import React from 'react';
import {MiniAvatar} from "../../avatar/MiniAvatar";
import {ProfileInfoStyled} from "./ProfileInfoStyled";

export const ProfileInfo = () => {
    return (
        <ProfileInfoStyled>
            <MiniAvatar/>
            <div>
                Avatar + description
            </div>
        </ProfileInfoStyled>
    );
};
