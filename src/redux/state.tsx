import {v1} from "uuid";
import {rerenderEntireTree} from "./render";

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
}
export  type ProfilePage = {
    posts: Array<PostPropsType>
    newPostText: string
}
export type StateType = {
    dialogsPage: DialogsPage
    profilePage: ProfilePage
}

export const state: StateType = {
    dialogsPage: {
        dialogs: [
            {id: v1(), name: "Alex"},
            {id: v1(), name: "Sveta"},
            {id: v1(), name: "Andrey"},
            {id: v1(), name: "Victor"},
            {id: v1(), name: "Georgy"}
        ],
        messages: [
            {id: v1(), message: "Hi"},
            {id: v1(), message: "How are you"},
            {id: v1(), message: "I learn React!"},
            {id: v1(), message: "I am too"},
            {id: v1(), message: "It's greate!"},
        ],
    },
    profilePage: {
        posts: [
            {id: v1(), message: "Hello, i like this course", likesCount: 15},
            {id: v1(), message: "It's a nice course, yes!", likesCount: 20},
            {id: v1(), message: "Hi!", likesCount: 2},
        ],
        newPostText: ""
    }
};

export function addPost() {
    const newPost: PostPropsType = {
        id: v1(),
        message: state.profilePage.newPostText,
        likesCount: 3
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = "";
    rerenderEntireTree(state)
}

export function addMessage(messageText: string) {
    const newMessage: MessagePropsType = {id: v1(), message: messageText};
    state.dialogsPage.messages.push(newMessage);
    rerenderEntireTree(state)
}

export function updateTextPost(newTextPost: string) {
    state.profilePage.newPostText = newTextPost;
    rerenderEntireTree(state)
}




