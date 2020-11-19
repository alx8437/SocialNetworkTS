import {v1} from "uuid";

let rerenderEntireTree = () => {
}

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
export type StateType = {
    dialogsPage: DialogsPage
    profilePage: ProfilePage
}

export type StoreType = {
    state: StateType
    addPost: () => void
    addMessage: () => void
    updateTextPost: (newTextPost: string) => void
    updateMessageText: (newTextMessage: string) => void
    subscribe: (observer: () => void) => void
}


export let store: StoreType = {
    state: {
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
            newTextMessage: ""
        },
        profilePage: {
            posts: [
                {id: v1(), message: "Hello, i like this course", likesCount: 15},
                {id: v1(), message: "It's a nice course, yes!", likesCount: 20},
                {id: v1(), message: "Hi!", likesCount: 2},
            ],
            newPostText: "123"
        }
    },
    addPost() {
        const newPost: PostPropsType = {
            id: v1(),
            message: this.state.profilePage.newPostText,
            likesCount: 3
        };
        this.state.profilePage.posts.push(newPost);
        this.state.profilePage.newPostText = ""
        rerenderEntireTree()
    },
    addMessage() {
        const newMessage: MessagePropsType = {
            id: v1(),
            message: this.state.dialogsPage.newTextMessage
        };
        this.state.dialogsPage.messages.push(newMessage);
        this.state.dialogsPage.newTextMessage = "";
        rerenderEntireTree()
    },
    updateTextPost(newTextPost: string) {
        this.state.profilePage.newPostText = newTextPost;
        rerenderEntireTree()
    },

    updateMessageText(newTextMessage: string) {
        this.state.dialogsPage.newTextMessage = newTextMessage;
        rerenderEntireTree()
    },

    subscribe(observer: () => void) {
        rerenderEntireTree = observer
    }

}








