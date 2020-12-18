export enum ACTIONS_TYPE_PROFILE {
    ADD_POST = "Profile/MyPostsContainer/ADD_POST",
    UPDATE_TEXT_POST = "Profile/MyPostsContainer/UPDATE_TEXT_POST",
}

type AddPostActionType = {
    type: ACTIONS_TYPE_PROFILE.ADD_POST,
}
type UpdateTextPost = {
    type: ACTIONS_TYPE_PROFILE.UPDATE_TEXT_POST,
    newTextPost: string,
}

export type ProfileActionsType = AddPostActionType | UpdateTextPost;

export const addPostAC = () => ({type: ACTIONS_TYPE_PROFILE.ADD_POST}) as const;
export const updateTextPostAC = (newTextPost: string) =>
    ({type: ACTIONS_TYPE_PROFILE.UPDATE_TEXT_POST, newTextPost});