import React from "react";
import s from "./FormControls.module.css"

type InputTextareaProps = {
    name: "newPostMessage"
    onBlur: () => void
    onChange: () => void
    onDragStart: () => void
    onDrop: () => void
    onFocus: () => void
    value: string
}

type MetaTextareaProps = {
    error: string | undefined
    touched: true
}

type PropsType = {
    input: InputTextareaProps,
    meta: MetaTextareaProps
}

export const FormControl: React.FC<PropsType> = (
    {
        input,
        meta,
        ...props
    }) => {
    const hasError = meta.touched && meta.error;
    return <React.Fragment>

            {props.children}

        {hasError && <div className={s.errorMessage}>{meta.error}</div>}
    </React.Fragment>
}

export const Textarea: React.FC<PropsType> = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>

}

export const Input: React.FC<PropsType> = (props) => {
    const styleForError = (props.meta.error && props.meta.touched) ? `${s.errorBorder}` : '';
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}>
        <input className={styleForError} {...input} {...restProps}/>
    </FormControl>

}

