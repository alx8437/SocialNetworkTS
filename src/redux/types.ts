//Action Creates types
export type AddPostActionType = {
    type: "ADD-POST"
}
export type UpdateTextPost = {
    type: "UPDATE-TEXT-POST"
    newTextPost: string
}
export type AddMessageActionType = {
    type: "ADD-MESSAGE"
}
export type UpdateTextMessage = {
    type: "UPDATE-TEXT-MESSAGE"
    newTextMessage: string
}

export type ACTypes = AddPostActionType | UpdateTextPost | AddMessageActionType | UpdateTextMessage

//State types
export type MessagePropsType = {
    id: string
    message: string
}
export type DialogItemPropsType = {
    id: string
    name: string
}
export type PostPropsType = {
    id: string
    message: string
    likesCount: number
}
export type DialogsPage = {
    dialogs: Array<DialogItemPropsType>
    messages: Array<MessagePropsType>
    newTextMessage: string
}
export  type ProfilePage = {
    posts: Array<PostPropsType>
    newPostText: string
}
