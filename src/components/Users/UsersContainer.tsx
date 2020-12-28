import {connect} from "react-redux";
import {UserType} from "../../redux/stateTypes";
import {StateType} from "../../redux/redux-store";
import {
    changeCurrentPage,
    follow,
    setTotalCountPages,
    setUsers,
    toggleIsFetching,
    unfollow
} from "../../redux/users/usersActions";
import React from "react";
import axios from "axios";
import User from "./Users";
import Preloader from "../common/Preloader/Preloader";

type MapStateToPropsType = {
    users: Array<UserType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
}
type MapDispatchToPropsType = {
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    setUsers: (users: Array<UserType>) => void,
    changeCurrentPage: (currentPage: number) => void,
    setTotalCountPages: (totalCount: number) => void,
    toggleIsFetching: (isFetching: boolean) => void,
}
type UsersApiPropsType = MapDispatchToPropsType & MapStateToPropsType
type GetUsersType = {
    items: Array<UserType>,
    totalCount: number,
    error: null,
}

class UsersApi extends React.Component<UsersApiPropsType> {
    componentDidMount(): void {
        this.props.toggleIsFetching(true);
            axios.get<GetUsersType>(
                `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
                {withCredentials: true})
                .then(response => {
                    this.props.setUsers(response.data.items);
                    this.props.setTotalCountPages(response.data.totalCount);
                    this.props.toggleIsFetching(false);
                })

    }

    onPageChanged = (pageNumber: number) => {
        this.props.toggleIsFetching(true);
        this.props.changeCurrentPage(pageNumber);
        axios.get<GetUsersType>(
            `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,
            {withCredentials: true})
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.toggleIsFetching(false);
            })
    }

    render() {
        return <React.Fragment>
            {this.props.isFetching ? <Preloader /> : <User
                totalUsersCount={this.props.totalUsersCount}
                onPageChanged={this.onPageChanged}
                currentPage={this.props.currentPage}
                users={this.props.users}
                followUser={this.props.follow}
                unfollowUser={this.props.unfollow}
                pageSize={this.props.pageSize}
            />
            }
        </React.Fragment>
    }
}

const mapStateToProps = (state: StateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}

const UsersContainer =
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, StateType>(mapStateToProps, {
        follow, unfollow, setUsers, changeCurrentPage, setTotalCountPages, toggleIsFetching,
    })(UsersApi);
export default UsersContainer;