import React from 'react'
import styles from './users.module.css'
import axios from "axios";
import default_avatar from "./../../asets/images/default-avatar.png"
import {UsersPropsType} from "./UsersContainer";

class UsersClass extends React.Component<UsersPropsType, any> {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return <div>
            {
                this.props.usersPage.users.map(user  => <div key={user.id}>
                <span>
                    <div key={user.id}>
                        <img src={user.photos.small || default_avatar} className={styles.userPhoto} alt={"Avatar"}/>
                    </div>
                    <div key={user.id}>
                        {user.followed ?
                            <button onClick={() => {
                                this.props.unfollow(user.id)
                            }}>Unfollow</button> :
                            <button onClick={() => {
                                this.props.follow(user.id)
                            }}>Follow</button>}
                    </div>
                </span >
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
    }
}

export default UsersClass
