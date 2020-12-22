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

export type ProfileType = {
    aboutMe: string | null,
    contacts: {
        facebook: string | null,
        website: string | null,
        vk: string | null,
        twitter: string | null,
        instagram: string | null,
        youtube: string | null,
        github: string | null,
        mainLink: string | null,
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: null | string,
    fullName: string,
    userId: number,
    photos: {
        small: string | null,
        large: string | null,
    }
}

export  type ProfileReducerType = {
    profile: ProfileType | null,
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

