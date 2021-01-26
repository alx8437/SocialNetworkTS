import React from 'react';
import Header from "./Header";
import {UserData} from "../../redux/rootStateTypes";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {authMe} from "../../redux/auth/authReducer";

type MapStateToPropsType = {
    data: UserData,
    isAuth: boolean,
}
type MapDispatchToPropsType = {
    authMe: () => void
}


type HeaderApiPropsType = MapStateToPropsType & MapDispatchToPropsType;

class HeaderApi extends React.Component<HeaderApiPropsType> {
    componentDidMount(): void {
        this.props.authMe()
    }

    render() {
        return <Header userData={this.props.data} isAuth={this.props.isAuth}/>
    }

}

const mapStateToProps = (state: StateType) => {
    return {
        data: state.auth.data,
        isAuth: state.auth.isAuth,
    }
}

const HeaderContainer =
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, StateType>(mapStateToProps, {authMe})(HeaderApi);
export default HeaderContainer;
