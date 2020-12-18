import {UsersReducerType} from "../types";
import {ACTIONS_TYPE_USERS, UsersActionsType} from "./usersActions";

const initialState: UsersReducerType = {
    users: [],
    pageSize: 4,
    totalUsersCount: 0,
    currentPage: 1,
}


const usersReducer = (state: UsersReducerType = initialState, action: UsersActionsType): UsersReducerType => {
    switch (action.type) {
        case ACTIONS_TYPE_USERS.FOLLOW:
            return {
                ...state,
                users: state.users.map(u =>
                    (u.id === action.userId) ? {...u, followed: true} : u
                )
            }
        case ACTIONS_TYPE_USERS.UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u =>
                    (u.id === action.userId) ? {...u, followed: false} : u
                )
            }
        case ACTIONS_TYPE_USERS.SET_USERS:
            return {...state, users: action.users}
        case ACTIONS_TYPE_USERS.CHANGE_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case ACTIONS_TYPE_USERS.SET_TOTAL_COUNT_PAGES:
            return {...state, totalUsersCount: action.totalCount}
        default:
            return state
    }
}

export default usersReducer;

