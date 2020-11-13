import {v1} from "uuid";

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

export type StateType = {
    dialogs: Array<DialogItemPropsType>
    messages: Array<MessagePropsType>
    posts: Array<PostPropsType>
}


export const state: StateType = {
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
    posts: [
        {id: v1(), message: "Hello, i like this course", likesCount: 15},
        {id: v1(), message: "It's a nice course, yes!", likesCount: 20},
        {id: v1(), message: "Hi!", likesCount: 2},
    ]
};

export function addPost(postText: string) {
    const newPost: PostPropsType = {id: v1(), message: postText, likesCount: 3};
    state.posts.push(newPost);
}

export function addMessage(messageText: string) {
    const newMessage: MessagePropsType = {id: v1(), message: messageText};
    state.messages.push(newMessage);
}




