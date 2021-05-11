import {v1} from "uuid";
import {PostType, ProfileStateType, ProfileType} from "../rootStateTypes";
import {Dispatch} from "redux";
import {profileApi} from "../../api/api";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: ProfileStateType = {
    profile: null,
    posts: [
        {id: v1(), message: "Hello, i like this course", likesCount: 15},
        {id: v1(), message: "It's a nice course, yes!", likesCount: 20},
        {id: v1(), message: "Hi!", likesCount: 2},
    ],
    status: "",
}

const slice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        addPostAC(state, action: PayloadAction<{ newTextMessage: string }>) {
            const newPost: PostType = {
                id: v1(),
                message: action.payload.newTextMessage,
                likesCount: 3,
            };
            state.posts.push(newPost)
        },
        setUserProfileAC(state, action: PayloadAction<{ profile: ProfileType }>) {
            state.profile = action.payload.profile
        },
        setProfileStatusAC(state, action: PayloadAction<{ status: string }>) {
            state.status = action.payload.status
        },
        updateProfileStatusAC(state, action: PayloadAction<{ status: string }>) {
            state.status = action.payload.status
        },
        deletePostAC(state, action: PayloadAction<{ postId: string }>) {
            const index = state.posts.findIndex(post => post.id === action.payload.postId)
            if (index !== -1) state.posts.splice(index, 1)
        }
    }
})

export const {addPostAC, deletePostAC, setProfileStatusAC, updateProfileStatusAC, setUserProfileAC} = slice.actions

//Thunks creators
export const getUserProfile = (userId: number) => async (dispatch: Dispatch) => {
    try {
        const res = await profileApi.getProfile(userId)
        if (res) dispatch(setUserProfileAC({profile: res}));
    } catch (e) {
        console.log(e)
    }

};

export const getStatus = (userId: number) => async (dispatch: Dispatch) => {
        try {
            const res = await profileApi.getStatus(userId);
            if (res) dispatch(setProfileStatusAC({status: res}));
        } catch (e) {
            console.log(e)
        }

};

export const updateStatus = (status: string) => async (dispatch: Dispatch) => {
    try {
        const res = await profileApi.updateStatus(status)
        if (res.resultCode === 0) dispatch(updateProfileStatusAC({status}));
    } catch (e) {
        console.log(e)
    }
}

export default slice.reducer