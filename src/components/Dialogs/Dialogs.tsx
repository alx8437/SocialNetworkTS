import React from 'react';
import styles from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsStateType} from "../../redux/rootStateTypes";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

export type DialogsPropsType = {
    dialogsPage: DialogsStateType
    addMessageAC: (newTextMessage: string) => void
    isAuth: boolean,
}

type AddMessageFormDataType = {
    newTextMessage: string,
}

const maxLength50 = maxLengthCreator(50)

const Dialogs = (props: DialogsPropsType) => {
    const dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    const messagesElements = props.dialogsPage.messages.map(m => <Message key={m.id} message={m.message} id={m.id}/>)

    const addMessage = (values: AddMessageFormDataType) => {
        props.addMessageAC(values.newTextMessage)
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogWrapper}>
                <div>
                    {dialogsElements}
                </div>
                <div>
                    {messagesElements}
                </div>
            </div>
            <AddMessageFormRedux onSubmit={addMessage}/>
        </div>
    )
}

const AddMessageForm: React.FC<InjectedFormProps<AddMessageFormDataType>> = (props) => {

    return <div>
        <form className={styles.sendMessage} onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Textarea}
                    validate={[required, maxLength50]}
                    name={"newTextMessage"}
                    placeholder={"Enter your text"}
                />
            </div>
            <button>Send</button>
        </form>
    </div>
}

const AddMessageFormRedux = reduxForm<AddMessageFormDataType>({form: "dialogAddMessageForm"})(AddMessageForm)
export default Dialogs;
