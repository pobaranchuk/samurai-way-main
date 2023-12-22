import {connect} from "react-redux";
import {
    follow,
    InitialUsersStateType, setCurrentPage, setToggleIsFetching, setTotalUsersCount,
    setUsers,
    unfollow, UsersType
} from "../../redux/users-reducer";
import {AppRootStateType} from "../../redux/redux-store";
import React from "react";
import axios from "axios";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";

type mapStateToPropsType = {
    usersPage: InitialUsersStateType
}

type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UsersType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    setToggleIsFetching: (isFetching: boolean) => void
}

const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
    return {
        usersPage: state.usersPage
    }
}

// const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
//     return {
//         follow: (userId: number) => {
//             dispatch(followActionCreator(userId))
//         },
//         unfollow: (userId: number) => {
//             dispatch(unfollowActionCreator(userId))
//         },
//         setUsers: (users: UsersType[]) => {
//             dispatch(setUsersActionCreator(users))
//         },
//         setCurrentPage: (currentPage: number) => {
//             dispatch(setCurrentPageActionCreator(currentPage))
//         },
//         setTotalUsersCount: (totalCount: number) => {
//             dispatch(setTotalUsersCountActionCreator(totalCount))
//         },
//         toggleIsFetching: (isFetching: boolean) => {
//             dispatch(setIsFetchingActionCreator(isFetching))
//         }
//     }
// }

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

class UsersContainer extends React.Component<UsersPropsType, any> {
    componentDidMount() {
        this.props.setToggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage.currentPage}&count=${this.props.usersPage.pageSize}`, {withCredentials: true})
            .then(response => {
                this.props.setToggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.setToggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.usersPage.pageSize}`, {withCredentials: true})
            .then(response => {
                this.props.setToggleIsFetching(false)
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return <>
            {this.props.usersPage.isFetching ? <Preloader/> : null}
            <Users
                usersPage={this.props.usersPage}
                onPageChanged={this.onPageChanged}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
            />
        </>
    }
}

export default connect(mapStateToProps, {
    follow, unfollow, setCurrentPage, setToggleIsFetching, setTotalUsersCount, setUsers
})(UsersContainer);