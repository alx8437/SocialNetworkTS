import React from "react";
import { reduxForm, InjectedFormProps, Field } from 'redux-form';
import {authApi} from "../../api/api";

//Types for our form
 export type FormDataType = {
    login: string,
    password: string,
    rememberMe: boolean,
}


// Когда мы оборачиваем нашу форму формой из библиотеки redux-form
// Сюда прийдут из нее пропсы - их мы должны встретить и типизировать, юзаем InjectedFormProps
// Также дженериками уточняем тип данных формы FormDataType - пишем сами
const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return <React.Fragment>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"login"} name={"login"} component={"input"}/>
            </div>
            <div>
                <Field placeholder={"password"} type={"password"} name={"password"} component={"input"}/>
            </div>
            <div>
                <Field type="checkbox" name={"rememberMe"} component={"input"}/> remember me
            </div>
            <button>Login</button>
        </form>
    </React.Fragment>
}

// Create HOC for our LoginForm component
const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

// Here we use our LoginReduxForm, that we wrap our LoginForm component
export const Login = () => {
    const onSubmit = (formData: FormDataType) => {
        authApi.login(formData)
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}
