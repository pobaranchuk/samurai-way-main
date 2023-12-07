import React from 'react'
import styles from './users.module.css'
import axios from "axios";
import default_avatar from "./../../asets/images/default-avatar.png"
import {UsersPropsType} from "./UsersContainer";

class UsersClass extends React.Component<UsersPropsType, any> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage.currentPage}&count=${this.props.usersPage.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.usersPage.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {

        let pagesCount = Math.ceil(this.props.usersPage.totalUsersCount / this.props.usersPage.pageSize)

        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        let curP = this.props.usersPage.currentPage;
        let curPF = ((curP - 5) < 0) ? 0 : curP - 5;
        let curPL = curP + 5;
        let slicedPages = pages.slice(curPF, curPL);

        return <div>
            <div>
                {
                    slicedPages.map(p => {
                        return <span
                            className={this.props.usersPage.currentPage === p && styles.selectedPage}
                            onClick={() => {
                                this.onPageChanged(p)
                            }}>
                         _{p}
                    </span>
                    })
                }
            </div>
            <div className={styles.users}>
                {
                    this.props.usersPage.users.map(user => <div key={user.id} className={styles.user}>
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
    }
}

export default UsersClass
