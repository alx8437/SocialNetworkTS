import {
    ACTypes,
    ChangeCurrentPageActionType,
    FollowActionType, SetTotalCountPagesActionType,
    SetUsersActionType,
    UnfollowActionType,
    User,
    UsersReducerType
} from "./types";

const initialState: UsersReducerType = {
    users: [],
    pageSize: 4,
    totalUsersCount: 0,
    currentPage: 1,
}


const usersReducer = (state: UsersReducerType = initialState, action: ACTypes): UsersReducerType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(u =>
                    (u.id === action.userId) ? {...u, followed: true} : u
                )
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(u =>
                    (u.id === action.userId) ? {...u, followed: false} : u
                )
            }
        case "SET-USERS":
            return {...state, users: action.users}
        case "CHANGE_CURRENT_PAGE":
            return {...state, currentPage: action.currentPage}
        case "SET_TOTAL_COUNT_PAGES":
            return {...state, totalUsersCount: action.totalCount}
        default:
            return state
    }
}


export const followAC = (userId: number): FollowActionType => {
    return {type: "FOLLOW", userId} as const
}

export const unfollowAC = (userId: number): UnfollowActionType => {
    return {type: "UNFOLLOW", userId} as const
}

export const setUsersAC = (users: Array<User>): SetUsersActionType => {
    return {type: "SET-USERS", users} as const
}

export const changeCurrentPageAC = (currentPage: number): ChangeCurrentPageActionType => {
    return {type: "CHANGE_CURRENT_PAGE", currentPage}
}

export const setTotalCountPagesAC = (totalCount: number): SetTotalCountPagesActionType => {
    return {type: "SET_TOTAL_COUNT_PAGES", totalCount}
}


export default usersReducer;

