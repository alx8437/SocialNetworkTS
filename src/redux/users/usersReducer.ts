import {UsersStateType} from "../stateTypes";
import {ACTIONS_TYPE_USERS, UsersActionsType} from "./usersActions";

const initialState: UsersStateType = {
    users: [],
    pageSize: 4,
    totalCount: 0,
    currentPage: 1,
    isFetching: false,
}


const usersReducer = (state: UsersStateType = initialState, action: UsersActionsType): UsersStateType => {
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
            return {...state, totalCount: action.totalCount}
        case ACTIONS_TYPE_USERS.TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        default:
            return state
    }
}

export default usersReducer;

