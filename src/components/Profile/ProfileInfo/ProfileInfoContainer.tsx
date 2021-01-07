import React from "react";
import {connect} from "react-redux";
import ProfileInfo from "./ProfileInfo";
import {ProfileType} from "../../../redux/rootStateTypes";
import Preloader from "../../common/Preloader/Preloader";
import {StateType} from "../../../redux/redux-store";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {getUserProfile} from "../../../redux/profile/profileActions";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";

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

export class ProfileInfoApi extends React.Component<ProfileInfoPropsType> {
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



const withAuthRedirectComponent = withAuthRedirect(ProfileInfoApi)

const withDataFromRoute = withRouter(withAuthRedirectComponent)

const ProfileInfoContainer = connect<MapStatePropsType, MapDispatchPropsType, {}, StateType>(
    mapStateToProps, {getUserProfile})(withDataFromRoute);
export default ProfileInfoContainer