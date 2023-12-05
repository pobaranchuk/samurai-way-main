import React from 'react'
import {UsersPropsType} from "./UsersContainer";

export const Users: React.FC<UsersPropsType> = ({usersPage, follow, unfollow, setUsers}) => {
    return (
        <div>
            {
                usersPage.users.map(user => {
                    return (
                        <div>
                    )
                })
            }
        </div>
    );
};

