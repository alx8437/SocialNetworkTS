import React from "react";
import {connect} from "react-redux";
import ProfileInfo from "./ProfileInfo";
import {ProfileType} from "../../../redux/rootStateTypes";
import axios from "axios"
import Preloader from "../../common/Preloader/Preloader";
import {setUserProfile} from "../../../redux/profile/profileActions";
import {StateType} from "../../../redux/redux-store";
import {RouteComponentProps, withRouter } from "react-router-dom";
import {profileApi} from "../../../api/api";

export type MapStatePropsType = {
    profile: ProfileType | null,
}

type PathParamsType = {
    userId: string,
}
export type MapDispatchPropsType = {
    setUserProfile: (profile: ProfileType) => void,
}
type ProfileInfoPropsType = RouteComponentProps<PathParamsType> & MapStatePropsType & MapDispatchPropsType

export class ProfileInfoApi extends React.Component<ProfileInfoPropsType> {
    componentDidMount(): void {
        const userId = this.props.match.params.userId ? this.props.match.params.userId : 8425;
        profileApi.getProfile(userId).then(data => this.props.setUserProfile(data))
    }
    render() {
        return this.props.profile ? <ProfileInfo profile={this.props.profile}/> : <Preloader/>
    }
}

const mapStateToProps = (state: StateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile
    }
}

const DataFromRoute = withRouter(ProfileInfoApi)

const ProfileInfoContainer = connect<MapStatePropsType, MapDispatchPropsType, {}, StateType>(
    mapStateToProps, {setUserProfile})(DataFromRoute);
export default ProfileInfoContainer