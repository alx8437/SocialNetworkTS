import {v1} from "uuid";

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
export type StateType = {
    dialogsPage: DialogsPage
    profilePage: ProfilePage
}

//Store types
export type StoreType = {
    _state: StateType
    _rerenderEntireTree: () => void
    subscribe: (observer: () => void) => void
    getState: () => StateType
    dispatch: (action: AddPostActionType |
        AddMessageActionType | UpdateTextPost | UpdateTextMessage) => void
}

//Action types
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


let store: StoreType = {
    _state: {
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
            newPostText: ""
        }
    },
    _rerenderEntireTree() {},

    getState() {
        return this._state
    },
    subscribe(observer: () => void) {
        this._rerenderEntireTree = observer
    },

    dispatch(action) {
        switch (action.type) {
            case "ADD-POST":
                const newPost: PostPropsType = {
                    id: v1(),
                    message: this._state.profilePage.newPostText,
                    likesCount: 3
                };
                this._state.profilePage.posts.push(newPost);
                this._state.profilePage.newPostText = ""
                this._rerenderEntireTree()
                break
            case "UPDATE-TEXT-POST":
                this._state.profilePage.newPostText = action.newTextPost;
                this._rerenderEntireTree()
                break
            case "ADD-MESSAGE":
                const newMessage: MessagePropsType = {
                    id: v1(),
                    message: this._state.dialogsPage.newTextMessage
                };
                this._state.dialogsPage.messages.push(newMessage);
                this._state.dialogsPage.newTextMessage = "";
                this._rerenderEntireTree()
                break
            case "UPDATE-TEXT-MESSAGE":
                this._state.dialogsPage.newTextMessage = action.newTextMessage;
                this._rerenderEntireTree()
                break
        }
    }
}

export default store








