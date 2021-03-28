import {UsersStateType, UserType} from "../rootStateTypes";
import {Dispatch} from "redux";
import {userApi} from "../../api/api";

export enum ACTIONS_TYPE_USERS {
    FOLLOW = "Users/FOLLOW",
    UNFOLLOW = "Users/UNFOLLOW",
    SET_USERS = 'Users/SET_USERS',
    CHANGE_CURRENT_PAGE = 'Users/CHANGE_CURRENT_PAGE',
    SET_TOTAL_COUNT_PAGES = 'Users/SET_TOTAL_COUNT_PAGES',
    TOGGLE_IS_FETCHING = 'Users/TOGGLE_IS_FETCHING',
    TOGGLE_IS_FOLLOWING_PROGRESS = 'Users/TOGGLE_IS_FOLLOWING_PROGRESS',
}

// Action types
export type FollowActionType = {
    type: ACTIONS_TYPE_USERS.FOLLOW,
    userId: number,
}
export type UnfollowActionType = {
    type: ACTIONS_TYPE_USERS.UNFOLLOW,
    userId: number,
}
export type SetUsersActionType = {
    type: ACTIONS_TYPE_USERS.SET_USERS,
    users: Array<UserType>,
}
export type ChangeCurrentPageActionType = {
    type: ACTIONS_TYPE_USERS.CHANGE_CURRENT_PAGE,
    currentPage: number
}
export type SetTotalCountPagesActionType = {
    type: ACTIONS_TYPE_USERS.SET_TOTAL_COUNT_PAGES
    totalCount: number,
}
export type ToggleIsFetchingActionType = {
    type: ACTIONS_TYPE_USERS.TOGGLE_IS_FETCHING,
    isFetching: boolean,
}
export type ToggleIsFollowingInProgressActionType = {
    type: ACTIONS_TYPE_USERS.TOGGLE_IS_FOLLOWING_PROGRESS,
    userId: number,
    isFetching: boolean,
}

export type UsersActionsType = FollowActionType | UnfollowActionType |
    SetUsersActionType | ChangeCurrentPageActionType | SetTotalCountPagesActionType
    | ToggleIsFetchingActionType | ToggleIsFollowingInProgressActionType


const initialState: UsersStateType = {
    users: [],
    pageSize: 4,
    totalCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
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
        case ACTIONS_TYPE_USERS.TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}

//Action creators
export const followSuccess = (userId: number): FollowActionType => {
    return {type: ACTIONS_TYPE_USERS.FOLLOW, userId}
};
export const unfollowSuccess = (userId: number): UnfollowActionType => {
    return {type: ACTIONS_TYPE_USERS.UNFOLLOW, userId}
};
export const setUsers = (users: Array<UserType>): SetUsersActionType => {
    return {type: ACTIONS_TYPE_USERS.SET_USERS, users}
};
export const changeCurrentPage = (currentPage: number): ChangeCurrentPageActionType => {
    return {type: ACTIONS_TYPE_USERS.CHANGE_CURRENT_PAGE, currentPage}
};
export const setTotalCountPages = (totalCount: number): SetTotalCountPagesActionType => {
    return {type: ACTIONS_TYPE_USERS.SET_TOTAL_COUNT_PAGES, totalCount}
};
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingActionType => {
    return {type: ACTIONS_TYPE_USERS.TOGGLE_IS_FETCHING, isFetching}
};
export const toggleIsFollowingProgress = (userId: number, isFetching: boolean): ToggleIsFollowingInProgressActionType => {
    return {type: ACTIONS_TYPE_USERS.TOGGLE_IS_FOLLOWING_PROGRESS, userId, isFetching}
};

//Thunks creators
export const getUsers = (currentPage: number, pageSize: number) => {
    return async (dispatch: Dispatch<UsersActionsType>) => {
        try {
            dispatch(toggleIsFetching(true));
            const res = await userApi.getUser(currentPage, pageSize)
            if (!res.error) {
                dispatch(setUsers(res.items));
                dispatch(setTotalCountPages(res.totalCount));
                dispatch(toggleIsFetching(false));
            }
        } catch (e) {
            console.log(e)
        }

    }
}

export const unfollow = (userId: number) => {
    return async (dispatch: Dispatch<UsersActionsType>) => {
        try {
            dispatch(toggleIsFollowingProgress(userId, true));
            const res = await userApi.unFollowUser(userId)
            if (res.resultCode === 0) {
                dispatch(unfollowSuccess(userId));
                dispatch(toggleIsFollowingProgress(userId, false));
            }
        } catch (e) {
            console.log(e)
        }

    }
}

export const follow = (userId: number) => {
    return async (dispatch: Dispatch<UsersActionsType>) => {
        try {
             dispatch(toggleIsFollowingProgress(userId, true));
            const res = await userApi.followUser(userId)
                if (res.resultCode === 0) {
                    dispatch(followSuccess(userId));
                    dispatch(toggleIsFollowingProgress(userId, false));
                }
        } catch (e) {
            console.log(e)
        }
    }
}

export default usersReducer;

