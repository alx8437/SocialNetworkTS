import React from "react";
import {connect} from "react-redux";
import ProfileInfo from "./ProfileInfo";
import {ProfileType} from "../../../redux/rootStateTypes";
import Preloader from "../../common/Preloader/Preloader";
import {StateType} from "../../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {getUserProfile} from "../../../redux/profile/profileActions";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";

export type MapStatePropsType = {
    profile: ProfileType | null,
}

type PathParamsType = {
    userId: string,
}
export type MapDispatchPropsType = {
    getUserProfile: (userId: number) => void;
};

export type ProfileInfoPropsType = RouteComponentProps<PathParamsType> & MapStatePropsType & MapDispatchPropsType

export class ProfileContainer extends React.Component<ProfileInfoPropsType> {
    componentDidMount(): void {
        const userId = this.props.match.params.userId ? this.props.match.params.userId : 8425;
        this.props.getUserProfile(Number(userId));
    }

    render() {
        return this.props.profile ? <ProfileInfo profile={this.props.profile}/> : <Preloader/>
    }
}

const mapStateToProps = (state: StateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
    }
}

export default compose(
    connect<MapStatePropsType, MapDispatchPropsType, {}, StateType>(
        mapStateToProps, {getUserProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer) as React.ComponentType;

