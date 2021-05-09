import {connect} from "react-redux";
import {UserType} from "../../redux/rootStateTypes";
import {RootStateType} from "../../redux/store";
import React from "react";
import User from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {changeCurrentPage, follow, getUsers, toggleIsFollowingProgress, unfollow} from "../../redux/users/usersReducer";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetchingStatus,
    getTotalUsersCount,
    getUserPageSize,
    getUsersSuperSelector
} from "../../redux/users/user-selectors";

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
export type UsersApiPropsType = MapDispatchToPropsType & MapStateToPropsType

class UsersContainer extends React.Component<UsersApiPropsType> {
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

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        users: getUsersSuperSelector(state),
        pageSize: getUserPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetchingStatus(state),
        followingInProgress: getFollowingInProgress(state),
    }
}


export default compose(
    connect<MapStateToPropsType, any, {}, RootStateType>(mapStateToProps, {
        follow, unfollow, changeCurrentPage, toggleIsFollowingProgress, getUsers,
    }),
    withAuthRedirect
)(UsersContainer) as React.ComponentType;
