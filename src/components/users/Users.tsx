import React from 'react'
import {UsersPropsType} from "./UsersContainer";
import styles from './users.module.css'
import {v1} from "uuid";

export const Users: React.FC<UsersPropsType> = ({usersPage, follow, unfollow, setUsers}) => {

    if( !usersPage.users.length){
        setUsers([
            {
                id: v1(),
                photoUrl: "https://shorturl.at/iksG3",
                followed: false,
                fullName: "Slava",
                status: "Yo how are you",
                location: {city: "Warsaw", country: "Poland"}
            },
            {
                id: v1(),
                photoUrl: "https://shorturl.at/iksG3",
                followed: true,
                fullName: "Mikas",
                status: "Im a boss",
                location: {city: "Kraków", country: "Poland"}
            },
            {
                id: v1(),
                photoUrl: "https://shorturl.at/iksG3",
                followed: false,
                fullName: "Fredo",
                status: "Yo how are you?",
                location: {city: "Gdansk", country: "Poland"}
            }
        ])
    }

    return <div>
        {
            usersPage.users.map(user => <div key={user.id}>
                <span>
                    <div>
                        <img src={user.photoUrl} className={styles.userPhoto} alt={"Avatar"}/>
                    </div>
                    <div>
                        {user.followed ?
                            <button onClick={()=>{unfollow(user.id)}}>Unfollow</button> :
                            <button onClick={()=>{follow(user.id)}}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{user.fullName}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{user.location.country}</div>
                        <div>{user.location.city}</div>
                    </span>
                </span>


            </div>)
        }
    </div>
}
