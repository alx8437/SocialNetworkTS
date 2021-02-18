import {v1} from "uuid";
import {PostPropsType, ProfileStateType, ProfileType} from "../rootStateTypes";
import {Dispatch} from "redux";
import {profileApi} from "../../api/api";

export enum ACTIONS_TYPE_PROFILE {
    ADD_POST = "Profile/MyPostsContainer/ADD_POST",
    SET_USER_PROFILE = "Profile/SET_USER_PROFILE",
    SET_PROFILE_STATUS = "Profile/SET_PROFILE_STATUS",
    UPDATE_PROFILE_STATUS = "Profile/UPDATE_PROFILE_STATUS",
    FAKE = 'FAKE'
}

const initialState: ProfileStateType = {
    profile:  null,
    posts: [
        {id: v1(), message: "Hello, i like this course", likesCount: 15},
        {id: v1(), message: "It's a nice course, yes!", likesCount: 20},
        {id: v1(), message: "Hi!", likesCount: 2},
    ],
    status: "",
    fake: 1,
}

//Types for action creators
export type AddPostActionType = {
    type: ACTIONS_TYPE_PROFILE.ADD_POST,
    newPostMessage: string
}

export type SetUserProfileType = {
    type: ACTIONS_TYPE_PROFILE.SET_USER_PROFILE,
    profile: ProfileType
}

export type SetProfileStatusType = {
    type: ACTIONS_TYPE_PROFILE.SET_PROFILE_STATUS,
    status: string,
}
export type UpdateProfileStatus = {
    type: ACTIONS_TYPE_PROFILE.UPDATE_PROFILE_STATUS,
    status: string
}

export type ProfileActionsType = AddPostActionType | SetUserProfileType | SetProfileStatusType | UpdateProfileStatus;

const profileReducer = (state: ProfileStateType = initialState, action: any): ProfileStateType => {
    switch (action.type) {
        case ACTIONS_TYPE_PROFILE.ADD_POST:
            const newPost: PostPropsType = {
                id: v1(),
                message: action.newPostMessage,
                likesCount: 3,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            }
        case ACTIONS_TYPE_PROFILE.SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,
            }
        case ACTIONS_TYPE_PROFILE.SET_PROFILE_STATUS:
            return {
                ...state,
                status: action.status,
            }
        case ACTIONS_TYPE_PROFILE.UPDATE_PROFILE_STATUS:
            return {
                ...state,
                status: action.status,
            }
        case ACTIONS_TYPE_PROFILE.FAKE:
                return {
                    ...state,
                    fake: state.fake + 1
                }
        default:
            return state
    }
}

//Action Creators
export const addPostAC = (newPostMessage: string): AddPostActionType =>
    ({type: ACTIONS_TYPE_PROFILE.ADD_POST, newPostMessage});
export const setUserProfileAC = (profile: ProfileType): SetUserProfileType => {
    return {type: ACTIONS_TYPE_PROFILE.SET_USER_PROFILE, profile}
};
export const setProfileStatusAC = (status: string): SetProfileStatusType => {
    return {type: ACTIONS_TYPE_PROFILE.SET_PROFILE_STATUS, status}
};
export const updateProfileStatusAC = (status: string): UpdateProfileStatus => {
    return {
        type: ACTIONS_TYPE_PROFILE.UPDATE_PROFILE_STATUS,
        status,
    }
}

//Thunks creators
export const getUserProfile = (userId: number) => {
    return (dispatch: Dispatch<ProfileActionsType>) => {
        profileApi.getProfile(userId).then(data => {
            dispatch(setUserProfileAC(data));
        });
    }
};

export const getStatus = (userId: number) => {
    return (dispatch: Dispatch<ProfileActionsType>) => {
        profileApi.getStatus(userId).then(data => {
            if (data) dispatch(setProfileStatusAC(data));
        });
    }
};

export const updateStatus = (status: string) => {
    return (dispatch: Dispatch<ProfileActionsType>) => {
        profileApi.updateStatus(status).then(res => {
            if (res.resultCode === 0) dispatch(updateProfileStatusAC(status));
        });
    }
}



export default profileReducer;