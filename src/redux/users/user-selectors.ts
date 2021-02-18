import {RootStateType} from "../store";
import {createSelector} from "reselect";

// Primitive selector
const getUsers = (state: RootStateType) => {
    return state.usersPage.users;
}

export const getUsersSelector = (state: RootStateType) => {
    //To make fake filter, that return new array
    return getUsers(state).filter(u => true)
}

// Rendering is not be repeat if use reselect library
export const getUsersSuperSelector = createSelector(getUsers, (users) => {
  return  users.filter(u => true)
})

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






