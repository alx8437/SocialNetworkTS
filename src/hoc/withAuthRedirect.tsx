import React from "react";
import {Redirect} from "react-router-dom";
import {DialogsPropsType} from "../components/Dialogs/Dialogs";
import {ProfileInfoPropsType} from "../components/Profile/ProfileInfo/ProfileInfoContainer";
import {StateType} from "../redux/redux-store";
import {connect} from "react-redux";

type PropsType = DialogsPropsType | ProfileInfoPropsType

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
     const RedirectComponent = (props: any) => {
        if (!props.isAuth) return <Redirect to={"/login"}/>
        return <Component {...props}/>
    };
    const connectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)

    return connectedRedirectComponent;
}