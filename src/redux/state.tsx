

export type MessagePropsType = {
    id: number
    message: string
}


export type DialogItemPropsType = {
    id: number
    name: string
}

export type PostPropsType = {
    id: number
    message: string
    likesCount: number
}

export type StateType = {
    dialogs: Array<DialogItemPropsType>
    messages: Array<MessagePropsType>
    posts: Array<PostPropsType>
}




export const state: StateType =
    {
        dialogs: [
            {id: 1, name: "Alex"},
            {id: 2, name: "Sveta"},
            {id: 3, name: "Andrey"},
            {id: 4, name: "Victor"},
            {id: 5, name: "Georgy"}
        ],
        messages:
            [
                {id: 1, message: "Hi"},
                {id: 2, message: "How are you"},
                {id: 3, message: "I learn React!"},
                {id: 4, message: "I am too"},
                {id: 5, message: "It's greate!"},
            ],
        posts:
            [
                {id: 1, message: "Hello, i like this course", likesCount: 15},
                {id: 2, message: "It's a nice course, yes!", likesCount: 20},
                {id: 3, message: "Hi!", likesCount: 2},
            ]

    };
