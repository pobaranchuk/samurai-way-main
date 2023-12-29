import {connect} from "react-redux";
import {
    follow, unfollow, getUsers,
    InitialUsersStateType, setCurrentPage, setToggleIsFollowingProgress
} from "../../redux/users-reducer";
import {AppRootStateType} from "../../redux/redux-store";
import React from "react";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";
import {Dispatch} from "redux";

type mapStateToPropsType = {
    usersPage: InitialUsersStateType
}

type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setCurrentPage: (currentPage: number) => void
    setToggleIsFollowingProgress: (isFollowing: boolean, userId: number) => void
    getUsers: (currentPage: number, pageSize: number) => (dispatch: Dispatch) => void
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
        this.props.getUsers(this.props.usersPage.currentPage, this.props.usersPage.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.usersPage.pageSize)
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
    follow, unfollow, setCurrentPage, setToggleIsFollowingProgress,
    getUsers
})(UsersContainer);