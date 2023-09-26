import React from 'react';
import {ProfileStyled} from "./ProfileStyled";

export const Profile = () => {
    return (
        <ProfileStyled>
            <div>
                <img src={"https://img.freepik.com/premium-photo/orange-butterfly-flower-nature-background_38810-5249.jpg?w=900"} alt={"Flower"}/>
            </div>
            <div>
                Avatar + description
            </div>
            <div>
                My post
                <div>
                    New Post
                </div>
                <div>
                    <div>
                        Post 1
                    </div>
                    <div>
                        Post 2
                    </div>
                </div>
            </div>
        </ProfileStyled>
    );
};