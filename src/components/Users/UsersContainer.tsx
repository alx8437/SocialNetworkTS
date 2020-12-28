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
import User from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {userApi} from "../../api/api";

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

class UsersApi extends React.Component<UsersApiPropsType> {
    componentDidMount(): void {
        this.props.toggleIsFetching(true);
        userApi.getUser(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.setUsers(data.items);
                this.props.setTotalCountPages(data.totalCount);
                this.props.toggleIsFetching(false);
            });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.toggleIsFetching(true);
        this.props.changeCurrentPage(pageNumber);
        userApi.getUser(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.setUsers(data.items);
                this.props.setTotalCountPages(data.totalCount);
                this.props.toggleIsFetching(false);
            });
    }
    render() {
        return <React.Fragment>
            {this.props.isFetching ? <Preloader/> : <User
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