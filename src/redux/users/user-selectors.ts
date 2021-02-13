import {RootStateType} from "../store";

export const getUsersSelector = (state: RootStateType) => {
    return state.usersPage.users
}

export const getUserPageSize = (state: RootStateType) => {
    return state.usersPage.pageSize
}

export const getTotalUsersCount = (state: RootStateType) => {
    return state.usersPage.totalCount
}

export const getCurrentPage = (state: RootStateType) => {
    return state.usersPage.currentPage
}

export const getIsFetchingStatus = (state: RootStateType) => {
    return state.usersPage.isFetching
}

export const getFollowingInProgress = (state: RootStateType) => {
    return state.usersPage.followingInProgress
}






