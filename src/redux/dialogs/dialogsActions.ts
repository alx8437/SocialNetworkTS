export enum ACTION_TYPES_DIALOGS {
    ADD_MESSAGE = "Dialogs/ADD_MESSAGE",
    UPDATE_TEXT_MESSAGE = "Dialogs/UPDATE_TEXT_MESSAGE",
}

type AddMessageActionType = {
    type: ACTION_TYPES_DIALOGS.ADD_MESSAGE,
}

type UpdateTextMessage = {
    type: ACTION_TYPES_DIALOGS.UPDATE_TEXT_MESSAGE,
    newTextMessage: string,
}

export const addMessageAC = () => ({type: ACTION_TYPES_DIALOGS.ADD_MESSAGE} as const)
export const updateTextMessageAC = (newTextMessage: string) => {
    return {type: ACTION_TYPES_DIALOGS.UPDATE_TEXT_MESSAGE, newTextMessage} as const
}



export type DialogsActionsType = AddMessageActionType | UpdateTextMessage