import {UsersStateType, UserType} from "../rootStateTypes";
import {Dispatch} from "redux";
import {userApi} from "../../api/api";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";


const initialState: UsersStateType = {
    users: [],
    pageSize: 4,
    totalCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
}

const slice = createSlice({
    name: "users",
    initialState,
    reducers: {
        followSuccess(state, action: PayloadAction<{ userId: number }>) {
            const index = state.users.findIndex(user => user.id === action.payload.userId)
            if (index !== -1) state.users[index].followed = true
        },
        unfollowSuccess(state, action: PayloadAction<{ userId: number }>) {
            const index = state.users.findIndex(user => user.id === action.payload.userId)
            if (index !== -1) state.users[index].followed = false
        },
        setUsers(state, action: PayloadAction<{ users: Array<UserType> }>) {
            state.users = action.payload.users
        },
        changeCurrentPage(state, action: PayloadAction<{ currentPage: number }>) {
            state.currentPage = action.payload.currentPage
        },
        setTotalCountPages(state, action: PayloadAction<{ totalCount: number }>) {
            state.totalCount = action.payload.totalCount
        },
        toggleIsFetching(state, action: PayloadAction<{ isFetching: boolean }>) {
            state.isFetching = action.payload.isFetching
        },
        toggleIsFollowingProgress(state, action: PayloadAction<{ userId: number, isFetching: boolean }>) {
            state.followingInProgress = action.payload.isFetching ?
                [state.followingInProgress.push(action.payload.userId)] :
                state.followingInProgress.filter(id => id !== action.payload.userId)
        },

    }
})

export const {
    changeCurrentPage,
    followSuccess,
    setTotalCountPages,
    setUsers,
    unfollowSuccess,
    toggleIsFetching,
    toggleIsFollowingProgress
} = slice.actions


const followUnfollowFlow = async (dispatch: Dispatch, userId: number, apiMethod: Function, actionCreator: Function) => {
    dispatch(toggleIsFollowingProgress({userId, isFetching: true}));
    const res = await apiMethod(userId)
    if (res.resultCode === 0) {
        dispatch(actionCreator({userId}));
        dispatch(toggleIsFollowingProgress({userId, isFetching: false}));
    }
}

//Thunks creators
export const getUsers = (currentPage: number, pageSize: number) => async (dispatch: Dispatch) => {
    try {
        dispatch(toggleIsFetching({isFetching: true}));
        const res = await userApi.getUser(currentPage, pageSize)
        if (!res.error) {
            dispatch(setUsers({users: res.items}));
            dispatch(setTotalCountPages({totalCount: res.totalCount}));
            dispatch(toggleIsFetching({isFetching: false}));
        }
    } catch (e) {
        console.log(e)
    }
}

export const unfollow = (userId: number) => async (dispatch: Dispatch) => {
    try {
        const apiMethod = userApi.unFollowUser.bind(userApi)
        followUnfollowFlow(dispatch, userId, apiMethod, unfollowSuccess)
    } catch (e) {
        console.log(e)
    }
}

export const follow = (userId: number) => async (dispatch: Dispatch) => {
    try {
        const apiMethod = userApi.followUser.bind(userApi)
        followUnfollowFlow(dispatch, userId, apiMethod, followSuccess)

    } catch (e) {
        console.log(e)
    }
}

export default slice.reducer

