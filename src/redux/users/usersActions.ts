import {UserType} from "../rootStateTypes";
import {userApi} from "../../api/api";
import {Dispatch} from "redux";

export enum ACTIONS_TYPE_USERS {
    FOLLOW = "Users/FOLLOW",
    UNFOLLOW = "Users/UNFOLLOW",
    SET_USERS = 'Users/SET_USERS',
    CHANGE_CURRENT_PAGE = 'Users/CHANGE_CURRENT_PAGE',
    SET_TOTAL_COUNT_PAGES = 'Users/SET_TOTAL_COUNT_PAGES',
    TOGGLE_IS_FETCHING = 'Users/TOGGLE_IS_FETCHING',
    TOGGLE_IS_FOLLOWING_PROGRESS = 'Users/TOGGLE_IS_FOLLOWING_PROGRESS',
}

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

//Action creators
export const follow = (userId: number): FollowActionType => {
    return {type: ACTIONS_TYPE_USERS.FOLLOW, userId}
};
export const unfollow = (userId: number): UnfollowActionType => {
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
export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch<UsersActionsType>) => {
        dispatch(toggleIsFetching(true));
        userApi.getUser(currentPage, pageSize)
            .then(data => {
                debugger
                dispatch(setUsers(data.items));
                dispatch(setTotalCountPages(data.totalCount));
                dispatch(toggleIsFetching(false));
            });
    }
}