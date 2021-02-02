import React from 'react';
import Header from "./Header";
import {UserData} from "../../redux/rootStateTypes";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {authMe, logOutMe} from "../../redux/auth/authReducer";

type MapStateToPropsType = {
    data: UserData,
    isAuth: boolean,
}
type MapDispatchToPropsType = {
    authMe: () => void,
    logOutMe: () => void,
}


type HeaderApiPropsType = MapStateToPropsType & MapDispatchToPropsType;

class HeaderApi extends React.Component<HeaderApiPropsType> {
    componentDidMount(): void {
        this.props.authMe()
    }

    render() {
        return <Header
            userData={this.props.data}
            isAuth={this.props.isAuth}
            logOutMe={this.props.logOutMe}
        />
    }

}

const mapStateToProps = (state: RootStateType) => {
    return {
        data: state.auth.data,
        isAuth: state.auth.isAuth,
    }
}

const HeaderContainer =
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, RootStateType>
    (mapStateToProps, {authMe, logOutMe})(HeaderApi);
export default HeaderContainer;
