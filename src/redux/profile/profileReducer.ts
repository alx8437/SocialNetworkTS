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
export const getUserProfile = (userId: number) => {
    return (dispatch: Dispatch) => {
        profileApi.getProfile(userId).then(data => {
            dispatch(setUserProfileAC({profile: data}));
        });
    }
};

export const getStatus = (userId: number) => {
    return (dispatch: Dispatch) => {
        profileApi.getStatus(userId).then(data => {
            if (data) dispatch(setProfileStatusAC({status: data}));
        });
    }
};

export const updateStatus = (status: string) => {
    return (dispatch: Dispatch) => {
        profileApi.updateStatus(status).then(res => {
            if (res.resultCode === 0) dispatch(updateProfileStatusAC({status}));
        });
    }
}

export default slice.reducer