import React from "react";
import {connect} from "react-redux";
import ProfileInfo from "./ProfileInfo";
import {ProfileType} from "../../../redux/stateTypes";
import axios from "axios"
import Preloader from "../../common/Preloader/Preloader";
import {setUserProfile} from "../../../redux/profile/profileActions";
import {StateType} from "../../../redux/redux-store";

export type MapStateToPropsType = {
    profile: ProfileType | null,
}
export type MapDispatchPropsType = {
    setUserProfile: (profile: ProfileType) => void,
}

export class ProfileInfoApi extends React.Component<MapStateToPropsType & MapDispatchPropsType> {

    componentDidMount(): void {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(res => {
                this.props.setUserProfile(res.data)
            })
    }

    render() {
        return this.props.profile ? <ProfileInfo profile={this.props.profile}/> : <Preloader/>
    }
}

const mapStateToProps = (state: StateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }
}


const ProfileInfoContainer = connect<MapStateToPropsType, MapDispatchPropsType, {}, StateType>(
    mapStateToProps, {setUserProfile})(ProfileInfoApi);
export default ProfileInfoContainer