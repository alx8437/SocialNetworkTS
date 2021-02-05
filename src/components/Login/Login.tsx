import React from "react";
import {reduxForm, InjectedFormProps, Field} from 'redux-form';
import {required} from "../../utils/validators/validators";
import {Input} from "../common/FormsControls/FormsControls";
import {loginMe} from "../../redux/auth/authReducer";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import { Redirect } from "react-router-dom";
import s from "../common/FormsControls/FormControls.module.css"

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
const LoginForm: React.FC<InjectedFormProps<LoginFormDataType>> = (props) => {
    const styleForError = props.error ? `${s.errorMessage}` : '';
    return <React.Fragment>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    placeholder={"email"}
                    name={"email"}
                    component={Input}
                    validate={[required]}
                />
            </div>
            <div>
                <Field
                    placeholder={"password"}
                    type={"password"}
                    name={"password"}
                    component={Input}
                    validate={[required]}
                />
            </div>
            <div>
                <Field
                    type="checkbox"
                    name={"rememberMe"}
                    component={Input}
                /> remember me
            </div>
            <div className={styleForError}>{props.error}</div>
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
      return  <Redirect to={"/profile"}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state: RootStateType) => {
    return  {isAuth: state.auth.isAuth}
}

export default connect<MapStatePropsType, MapDispatchPropsType, {}, RootStateType>(mapStateToProps, {loginMe})(Login);