import {ProfileType} from "../stateTypes";

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

export const addPostAC = () => ({type: ACTIONS_TYPE_PROFILE.ADD_POST}) as const;

export const updateTextPostAC = (newTextPost: string) =>
    ({type: ACTIONS_TYPE_PROFILE.UPDATE_TEXT_POST, newTextPost}) as const;

export const setUserProfile = (profile: ProfileType) => {
   return {type: ACTIONS_TYPE_PROFILE.SET_USER_PROFILE, profile}
};