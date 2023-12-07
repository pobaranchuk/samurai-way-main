import React from 'react'
import {UsersPropsType} from "./UsersContainer";
import styles from './users.module.css'
import {v1} from "uuid";
import axios from "axios";
import default_avatar from "./../../asets/images/default-avatar.png"

class UsersClass extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            debugger
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return <div>
            {
                this.props.usersPage.users.map(user => <div key={user.id}>
                <span>
                    <div>
                        <img src={user.photos.small || default_avatar} className={styles.userPhoto} alt={"Avatar"}/>
                    </div>
                    <div>
                        {user.followed ?
                            <button onClick={() => {
                                this.props.unfollow(user.id)
                            }}>Unfollow</button> :
                            <button onClick={() => {
                                this.props.follow(user.id)
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
    }

}

export default UsersClass
