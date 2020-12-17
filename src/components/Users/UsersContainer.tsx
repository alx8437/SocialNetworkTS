import {connect} from "react-redux";
import {ACTypes, User} from "../../redux/types";
import {StateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {changeCurrentPageAC, followAC, setTotalCountPagesAC, setUsersAC, unfollowAC} from "../../redux/usersReducer";
import Users from "./Users";

type MapStateToProps = {
    users: Array<User>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
}

type MapDispatchToProps = {
    followUser: (userId: number) => void,
    unfollowUser: (userId: number) => void,
    setUsers: (users: Array<User>) => void,
    changeCurrentPage: (currentPage: number) => void,
    setTotalCountPages: (totalCount: number) => void,
}

const mapStateToProps = (state: StateType): MapStateToProps => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}

const mapDispatchToProps = (dispatch: Dispatch<ACTypes>): MapDispatchToProps => {
    return {
        followUser: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollowUser: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<User>) => {
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
    connect<MapStateToProps, MapDispatchToProps, {}, StateType>(mapStateToProps, mapDispatchToProps)(Users)
export default UsersContainer;