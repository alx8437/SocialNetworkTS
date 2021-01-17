import {ProfileType} from "../rootStateTypes";
import {Dispatch} from "redux";
import {profileApi} from "../../api/api";

export enum ACTIONS_TYPE_PROFILE {
    ADD_POST = "Profile/MyPostsContainer/ADD_POST",
    UPDATE_TEXT_POST = "Profile/MyPostsContainer/UPDATE_TEXT_POST",
    SET_USER_PROFILE = "Profile/SET_USER_PROFILE",
    SET_PROFILE_STATUS = "Profile/SET_PROFILE_STATUS",
    UPDATE_PROFILE_STATUS = "Profile/UPDATE_PROFILE_STATUS",
}

//Types for action creators
export type AddPostActionType = {
    type: ACTIONS_TYPE_PROFILE.ADD_POST,
}
export type UpdateTextPost = {
    type: ACTIONS_TYPE_PROFILE.UPDATE_TEXT_POST,
    newTextPost: string,
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

export type ProfileActionsType = AddPostActionType | UpdateTextPost
    | SetUserProfileType | SetProfileStatusType | UpdateProfileStatus;

//Action Creators
export const addPostAC = (): AddPostActionType => ({type: ACTIONS_TYPE_PROFILE.ADD_POST});
export const updateTextPostAC = (newTextPost: string): UpdateTextPost => {
    return {type: ACTIONS_TYPE_PROFILE.UPDATE_TEXT_POST, newTextPost}
};
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

//Thunks
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



