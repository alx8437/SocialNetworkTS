//Action Creates types

export type AddMessageActionType = {
    type: "ADD-MESSAGE",
}
export type UpdateTextMessage = {
    type: "UPDATE-TEXT-MESSAGE",
    newTextMessage: string,
}



//State types
export type MessagePropsType = {
    id: string,
    message: string,
}
export type DialogItemPropsType = {
    id: string,
    name: string,
}
export type PostPropsType = {
    id: string,
    message: string,
    likesCount: number,
}
export type DialogsPageType = {
    dialogs: Array<DialogItemPropsType>,
    messages: Array<MessagePropsType>,
    newTextMessage: string,
}
export  type ProfilePageType = {
    posts: Array<PostPropsType>,
    newPostText: string,
}

type photosUser = {
    small: string | null,
    large: string | null,
}

export type User = {
    id: number,
    name: string,
    followed: boolean,
    status: string | null,
    photos: photosUser,
    uniqueUrlName: null | string,
}

export type UsersReducerType = {
    users: Array<User>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
}

