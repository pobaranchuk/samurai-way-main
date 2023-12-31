import React from 'react';
import styles from "./users.module.css";
import default_avatar from "../../asets/images/default-avatar.png";
import {UsersPropsType} from "./UsersContainer";
import {NavLink} from "react-router-dom";

type UsersContainerPropsType = Partial<UsersPropsType> & { onPageChanged: (pageNumber: number) => void }

const Users = (props: UsersContainerPropsType) => {

    let pagesCount = Math.ceil(
        props.usersPage.totalUsersCount / props.usersPage.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let curP = props.usersPage.currentPage;
    let curPF = ((curP - 5) < 0) ? 0 : curP - 5;
    let curPL = curP + 5;
    let slicedPages = pages.slice(curPF, curPL);

    return (
        <div>
            <div>
                {
                    slicedPages.map(p => {
                        return <span
                            className={props.usersPage.currentPage === p && styles.selectedPage}
                            onClick={() => {
                                props.onPageChanged(p)
                            }}>
                         _{p}
                    </span>
                    })
                }
            </div>
            <div className={styles.users}>
                {
                    props.usersPage.users.map(user => <div key={user.id} className={styles.user}>
                <span>
                    <div key={user.id}>
                        <NavLink to={`/profile/${user.id}`}>
                            <img src={user.photos.small || default_avatar} className={styles.userPhoto} alt={"Avatar"}/>
                        </NavLink>
                    </div>
                    <div key={user.id}>
                        {user.followed ?
                            <button disabled={props.usersPage.followingInProgress.some(id => id == user.id)}
                                    onClick={() => {
                                        props.unfollow((user.id))
                                    }}>Unfollow</button> :
                            <button disabled={props.usersPage.followingInProgress.some(id => id == user.id)}
                                    onClick={() => {
                                        props.follow((user.id))
                                    }}>Follow</button>}
                    </div>
                </span>
                        <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{"user.location.country"}</div>
                        <div>{"user.location.city"}</div>
                    </span>
                </span>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Users;