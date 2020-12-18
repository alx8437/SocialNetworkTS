import {User} from "../stateTypes";

export enum ACTIONS_TYPE_USERS {
    FOLLOW = "Users/FOLLOW",
    UNFOLLOW = "Users/UNFOLLOW",
    SET_USERS = 'Users/SET_USERS',
    CHANGE_CURRENT_PAGE = 'Users/CHANGE_CURRENT_PAGE',
    SET_TOTAL_COUNT_PAGES = 'Users/SET_TOTAL_COUNT_PAGES',
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
    users: Array<User>,
}

export type ChangeCurrentPageActionType = {
    type: ACTIONS_TYPE_USERS.CHANGE_CURRENT_PAGE,
    currentPage: number
}


export type SetTotalCountPagesActionType = {
    type: ACTIONS_TYPE_USERS.SET_TOTAL_COUNT_PAGES
    totalCount: number,
}

export type UsersActionsType = FollowActionType | UnfollowActionType |
    SetUsersActionType | ChangeCurrentPageActionType | SetTotalCountPagesActionType

export const followAC = (userId: number): FollowActionType => {
    return {type: ACTIONS_TYPE_USERS.FOLLOW, userId}
}

export const unfollowAC = (userId: number): UnfollowActionType => {
    return {type: ACTIONS_TYPE_USERS.UNFOLLOW, userId}
}

export const setUsersAC = (users: Array<User>): SetUsersActionType => {
    return {type: ACTIONS_TYPE_USERS.SET_USERS, users}
}

export const changeCurrentPageAC = (currentPage: number): ChangeCurrentPageActionType => {
    return {type: ACTIONS_TYPE_USERS.CHANGE_CURRENT_PAGE, currentPage}
}

export const setTotalCountPagesAC = (totalCount: number): SetTotalCountPagesActionType => {
    return {type: ACTIONS_TYPE_USERS.SET_TOTAL_COUNT_PAGES, totalCount}
}
