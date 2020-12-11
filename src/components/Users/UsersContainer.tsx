import {connect} from "react-redux";
import {ACTypes, User} from "../../redux/types";
import {StateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unfollowAC} from "../../redux/usersReducer";
import Users from "./Users";

type MapStateToProps = {
    users: Array<User>
}

type MapDispatchToProps = {
    followUser: (userId: number) => void
    unfollowUser: (userId: number) => void
    setUsers: (users: Array<User>) => void
}

const mapStateToProps = (state: StateType): MapStateToProps => {
    return {
        users: state.usersPage.users
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
        }
    }
}


const UsersContainer =
    connect<MapStateToProps, MapDispatchToProps, {}, StateType>(mapStateToProps, mapDispatchToProps)(Users)
export default UsersContainer;