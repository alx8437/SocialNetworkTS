import {connect} from "react-redux";
import {UserType} from "../../redux/stateTypes";
import {StateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {
    changeCurrentPageAC,
    followAC, ToggleIsFetchingAC,
    setTotalCountPagesAC,
    setUsersAC,
    unfollowAC,
    UsersActionsType
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
    followUser: (userId: number) => void,
    unfollowUser: (userId: number) => void,
    setUsers: (users: Array<UserType>) => void,
    changeCurrentPage: (currentPage: number) => void,
    setTotalCountPages: (totalCount: number) => void,
    toggleIsFetching: (isFetching: boolean) => void,
}


type GetUsersType = {
    items: Array<UserType>,
    totalCount: number,
    error: null,
}


class UsersApi extends React.Component<MapDispatchToPropsType & MapStateToPropsType> {
    componentDidMount(): void {
        this.props.toggleIsFetching(true);
            axios.get<GetUsersType>(
                `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                    debugger
                    this.props.setUsers(response.data.items);
                    this.props.setTotalCountPages(response.data.totalCount);
                    this.props.toggleIsFetching(false);
                })

    }

    onPageChanged = (pageNumber: number) => {
        this.props.toggleIsFetching(true);
        this.props.changeCurrentPage(pageNumber);
        axios.get<GetUsersType>(
            `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
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
                followUser={this.props.followUser}
                unfollowUser={this.props.unfollowUser}
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
        },
        toggleIsFetching: (isFetching: boolean) => {
            dispatch(ToggleIsFetchingAC(isFetching))
        },
    }
}


const UsersContainer =
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, StateType>(mapStateToProps, mapDispatchToProps)(UsersApi)
export default UsersContainer;