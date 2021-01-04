import {ProfileType} from "../rootStateTypes";
import {Dispatch} from "redux";
import {profileApi} from "../../api/api";

export enum ACTIONS_TYPE_PROFILE {
    ADD_POST = "Profile/MyPostsContainer/ADD_POST",
    UPDATE_TEXT_POST = "Profile/MyPostsContainer/UPDATE_TEXT_POST",
    SET_USER_PROFILE = "Profile/SET_USER_PROFILE"
}

export type AddPostActionType = {
    type: ACTIONS_TYPE_PROFILE.ADD_POST,
}
export type UpdateTextPost = {
    type: ACTIONS_TYPE_PROFILE.UPDATE_TEXT_POST,
    newTextPost: string,
}

export type SetUserProfile = {
    type: ACTIONS_TYPE_PROFILE.SET_USER_PROFILE,
    profile: ProfileType
}

export type ProfileActionsType = AddPostActionType | UpdateTextPost | SetUserProfile;

export const addPostAC = (): AddPostActionType => ({type: ACTIONS_TYPE_PROFILE.ADD_POST});

export const updateTextPostAC = (newTextPost: string): UpdateTextPost =>
    ({type: ACTIONS_TYPE_PROFILE.UPDATE_TEXT_POST, newTextPost});

export const setUserProfile = (profile: ProfileType): SetUserProfile => {
   return {type: ACTIONS_TYPE_PROFILE.SET_USER_PROFILE, profile}
};

export const getUserProfile = (userId: number) => {
    return (dispatch: Dispatch<ProfileActionsType>) => {
        profileApi.getProfile(userId).then(data => dispatch(setUserProfile(data)))
    }
}