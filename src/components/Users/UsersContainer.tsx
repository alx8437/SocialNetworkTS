import {connect} from "react-redux";
import {UserType} from "../../redux/stateTypes";
import {StateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {
    changeCurrentPageAC,
    followAC,
    setTotalCountPagesAC,
    setUsersAC,
    unfollowAC,
    UsersActionsType
} from "../../redux/users/usersActions";
import React from "react";
import axios from "axios";
import User from "./Users";

type MapStateToPropsType= {
    users: Array<UserType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
}

type MapDispatchToPropsType = {
    followUser: (userId: number) => void,
    unfollowUser: (userId: number) => void,
    setUsers: (users: Array<UserType>) => void,
    changeCurrentPage: (currentPage: number) => void,
    setTotalCountPages: (totalCount: number) => void,
}

// type UsersApiPropsType = {
//     users: Array<UserType>,
//     pageSize: number,
//     followUser: (userId: number) => void,
//     unfollowUser: (userId: number) => void,
//     setUsers: (users: Array<UserType>) => void,
//     totalUsersCount: number,
//     currentPage: number,
//     changeCurrentPage: (currentPage: number) => void,
//     setTotalCountPages: (currentPage: number) => void,
// }

type GetUsersType = {
    items: Array<UserType>,
    totalCount: number,
    error: null,
}


class UsersApi extends React.Component<MapDispatchToPropsType & MapStateToPropsType> {
    componentDidMount(): void {
        if (this.props.users.length === 0) {
            axios.get<GetUsersType>(
                `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                    debugger
                    this.props.setUsers(response.data.items);
                    this.props.setTotalCountPages(response.data.totalCount)
                })
        }
    }
    onPageChanged = (pageNumber: number) => {
        this.props.changeCurrentPage(pageNumber);
        axios.get<GetUsersType>(
            `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            })
    }

    render() {
        return <User
            totalUsersCount={this.props.totalUsersCount}
            onPageChanged={this.onPageChanged}
            currentPage={this.props.currentPage}
            users={this.props.users}
            followUser={this.props.followUser}
            unfollowUser={this.props.unfollowUser}
            pageSize={this.props.pageSize}
        />
    }
}

const mapStateToProps = (state: StateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
    }
}

const mapDispatchToProps = (dispatch: Dispatch<UsersActionsType>): MapDispatchToPropsType => {
    return {
        followUser: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollowUser: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        },
        changeCurrentPage: (currentPage: number) => {
            dispatch(changeCurrentPageAC(currentPage))
        },
        setTotalCountPages: (totalCount: number) => {
            dispatch(setTotalCountPagesAC(totalCount))
        }
    }
}


const UsersContainer =
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, StateType>(mapStateToProps, mapDispatchToProps)(UsersApi)
export default UsersContainer;