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
export type DialogsReducerType = {
    dialogs: Array<DialogItemPropsType>,
    messages: Array<MessagePropsType>,
    newTextMessage: string,
}
export  type ProfileReducerType = {
    posts: Array<PostPropsType>,
    newPostText: string,
}

export type PhotosUserType = {
    small: string | null,
    large: string | null,
}

export type UserType = {
    id: number,
    name: string,
    followed: boolean,
    status: string | null,
    photos: PhotosUserType,
}

export type UsersReducerType = {
    users: Array<UserType>,
    pageSize: number,
    totalCount: number,
    currentPage: number,
    isFetching: boolean,
}

