import React from "react";
import {connect} from "react-redux";
import ProfileInfo from "./ProfileInfo";
import {ProfileType} from "../../../redux/rootStateTypes";
import Preloader from "../../common/Preloader/Preloader";
import {RootStateType} from "../../../redux/store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";
import {getStatus, getUserProfile, updateStatus} from "../../../redux/profile/profileReducer";

export type MapStatePropsType = {
    profile: ProfileType | null,
    status: string,
    authUserId: number | null,
}

type PathParamsType = {
    userId: string,
}
export type MapDispatchPropsType = {
    getUserProfile: (userId: number) => void,
    getStatus: (userId: number) => void,
    updateStatus: (status: string) => void,
};

export type ProfileInfoPropsType = RouteComponentProps<PathParamsType> & MapStatePropsType & MapDispatchPropsType

export class ProfileContainer extends React.Component<ProfileInfoPropsType> {
    componentDidMount(): void {
        const userId = this.props.match.params.userId ? this.props.match.params.userId : this.props.authUserId;
        this.props.getUserProfile(Number(userId));
        this.props.getStatus(Number(userId));
    }

    render() {
        return this.props.profile
            ?
            <ProfileInfo
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
            />
            :
            <Preloader/>
    }
}

const mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authUserId: state.auth.data.id,
    }
}

export default compose(
    connect<MapStatePropsType, MapDispatchPropsType, {}, RootStateType>(
        mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer) as React.ComponentType;

