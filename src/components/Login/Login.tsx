import React from "react";
import {InjectedFormProps, reduxForm} from 'redux-form';
import {createField} from "../common/FormsControls/FormsControls";
import {loginMe} from "../../redux/auth/authReducer";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/store";
import {Redirect} from "react-router-dom";
import styles from "../common/FormsControls/FormControls.module.css"

// Types for our form
export type LoginFormDataType = {
    email: string,
    password: string,
    rememberMe: boolean,
}

export  type MapStatePropsType = {
    isAuth: boolean
};

type MapDispatchPropsType = {
    loginMe: (email: string, password: string, rememberMe: boolean) => void;
};


// Когда мы оборачиваем нашу форму формой из библиотеки redux-form
// Сюда прийдут из нее пропсы - их мы должны встретить и типизировать, юзаем InjectedFormProps
// Также дженериками уточняем тип данных формы FormDataType - пишем сами
const LoginForm: React.FC<InjectedFormProps<LoginFormDataType>> = ({handleSubmit, error}) => {
    const styleForError = error ? `${styles.errorMessage}` : '';
    return <React.Fragment>
        <form onSubmit={handleSubmit}>
            {createField('email')}
            {createField('password')}
            {createField('checkbox', 'remember me')}
            <div className={styleForError}>{error}</div>
            <button>Login</button>
        </form>
    </React.Fragment>
}

// Create HOC for our LoginForm component
const LoginReduxForm = reduxForm<LoginFormDataType>({form: 'login'})(LoginForm)

// Here we use our LoginReduxForm, that we wrap our LoginForm component
const Login = (props: MapDispatchPropsType & MapStatePropsType) => {
    const onSubmit = (formData: LoginFormDataType) => {
        props.loginMe(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state: RootStateType) => {
    return {isAuth: state.auth.isAuth}
}

export default connect<MapStatePropsType, MapDispatchPropsType, {}, RootStateType>(mapStateToProps, {loginMe})(Login);