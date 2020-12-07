import {connect} from "react-redux";
import {ACTypes, User} from "../../redux/types";
import {StateType} from "../../redux/redux-store";
import Users from "./Users";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unfollowAC} from "../../redux/usersReducer";

type MapStateToProps = {
    users: Array<User>
}

type MapDispatchToProps = {
    followUser: (userId: string) => void
    unfollowUser: (userId: string) => void
    setUsers: (users: Array<User>) => void
}

const mapStateToProps = (state: StateType): MapStateToProps => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: Dispatch<ACTypes>): MapDispatchToProps => {
    return {
        followUser: (userId: string) => {
            dispatch(followAC(userId))
        },
        unfollowUser: (userId: string) => {
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