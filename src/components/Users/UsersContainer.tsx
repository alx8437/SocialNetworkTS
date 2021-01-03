import {connect} from "react-redux";
import {UserType} from "../../redux/rootStateTypes";
import {StateType} from "../../redux/redux-store";
import {
    changeCurrentPage,
    follow,
    getUsers,
    toggleIsFollowingProgress,
    unfollow,
} from "../../redux/users/usersActions";
import React from "react";
import User from "./Users";
import Preloader from "../common/Preloader/Preloader";

type MapStateToPropsType = {
    users: Array<UserType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: Array<number>,
}
type MapDispatchToPropsType = {
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    changeCurrentPage: (currentPage: number) => void,
    toggleIsFollowingProgress: (userId: number, isFetching: boolean) => void,
    getUsers: (currentPage: number, pageSize: number) => void,
}
type UsersApiPropsType = MapDispatchToPropsType & MapStateToPropsType

class UsersApi extends React.Component<UsersApiPropsType> {
    componentDidMount(): void {
        this.props.changeCurrentPage(this.props.currentPage);
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber: number) => {
        this.props.changeCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, this.props.pageSize);
    }
    render() {
        return <React.Fragment>
            {this.props.isFetching ? <Preloader/> : <User {...this.props} onPageChanged={this.onPageChanged}/>}
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
        followingInProgress: state.usersPage.followingInProgress,
    }
}

const UsersContainer =
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, StateType>(mapStateToProps, {
         follow, unfollow, changeCurrentPage, toggleIsFollowingProgress, getUsers,
    })(UsersApi);
export default UsersContainer;