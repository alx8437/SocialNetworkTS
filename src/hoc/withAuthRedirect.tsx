import React from "react";
import {Redirect} from "react-router-dom";
import {DialogsPropsType} from "../components/Dialogs/Dialogs";
import {ProfileInfoPropsType} from "../components/Profile/ProfileInfo/ProfileInfoContainer";
import {StateType} from "../redux/redux-store";
import {connect} from "react-redux";
import {UsersApiPropsType} from "../components/Users/UsersContainer";

type PropsType = DialogsPropsType | ProfileInfoPropsType | UsersApiPropsType

type MapStatePropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: StateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
    }
}


export const withAuthRedirect = (Component: any) => {
    debugger
     const RedirectComponent = (props: PropsType & MapStatePropsType) => {
        debugger
        if (!props.isAuth) return <Redirect to={"/login"}/>
        return <Component {...props}/>
    };
    return connect(mapStateToProps)(RedirectComponent)
}