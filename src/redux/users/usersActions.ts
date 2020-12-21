import {UserType} from "../stateTypes";

export enum ACTIONS_TYPE_USERS {
    FOLLOW = "Users/FOLLOW",
    UNFOLLOW = "Users/UNFOLLOW",
    SET_USERS = 'Users/SET_USERS',
    CHANGE_CURRENT_PAGE = 'Users/CHANGE_CURRENT_PAGE',
    SET_TOTAL_COUNT_PAGES = 'Users/SET_TOTAL_COUNT_PAGES',
    TOGGLE_IS_FETCHING = 'Users/TOGGLE_IS_FETCHING'
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

export type UsersActionsType = FollowActionType | UnfollowActionType |
    SetUsersActionType | ChangeCurrentPageActionType | SetTotalCountPagesActionType
    | ToggleIsFetchingActionType

export const followAC = (userId: number): FollowActionType => {
    return {type: ACTIONS_TYPE_USERS.FOLLOW, userId}
}

export const unfollowAC = (userId: number): UnfollowActionType => {
    return {type: ACTIONS_TYPE_USERS.UNFOLLOW, userId}
}

export const setUsersAC = (users: Array<UserType>): SetUsersActionType => {
    return {type: ACTIONS_TYPE_USERS.SET_USERS, users}
}

export const changeCurrentPageAC = (currentPage: number): ChangeCurrentPageActionType => {
    return {type: ACTIONS_TYPE_USERS.CHANGE_CURRENT_PAGE, currentPage}
}

export const setTotalCountPagesAC = (totalCount: number): SetTotalCountPagesActionType => {
    return {type: ACTIONS_TYPE_USERS.SET_TOTAL_COUNT_PAGES, totalCount}
}

export const ToggleIsFetchingAC = (isFetching: boolean): ToggleIsFetchingActionType => {
    return {type: ACTIONS_TYPE_USERS.TOGGLE_IS_FETCHING, isFetching}
}
