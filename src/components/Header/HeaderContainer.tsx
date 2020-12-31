import React from 'react';
import Header from "./Header";
import axios from "axios";
import {UserData} from "../../redux/rootStateTypes";
import {connect} from "react-redux";
import {setUserData} from "../../redux/auth/authActions";
import {StateType} from "../../redux/redux-store";

type MapStateToPropsType = {
    data: UserData,
    isAuth: boolean,
}
type MapDispatchToPropsType = {
    setUserData: (data: UserData, isAuth: boolean) => void
}

type GetLoginDataType = {
    data: UserData,
    resultCode: number
}

type HeaderApiPropsType = MapStateToPropsType & MapDispatchToPropsType;

class HeaderApi extends React.Component<HeaderApiPropsType> {
    componentDidMount(): void {
        axios.get<GetLoginDataType>(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then((response) => {
                if (response.data.resultCode === 0) {
                    this.props.setUserData(response.data.data, true)
                }
            })
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
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, StateType>(mapStateToProps, {setUserData})(HeaderApi);
export default HeaderContainer;
