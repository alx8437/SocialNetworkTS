import React from "react";

type PropsType = {
    status: string
};

class ProfileStatus extends React.Component<PropsType> {
    state = {
        editMode: false
    }

    toggleEditMode = () => {
        this.setState((state: {editMode: boolean}) => {
            return {editMode: !state.editMode}
        })
    }

    render() {
        return <React.Fragment>
            {this.state.editMode ?
                <div>
                    <input autoFocus={true} onBlur={this.toggleEditMode} value={this.props.status}/>
                </div> :
                <div>
                    <span onDoubleClick={this.toggleEditMode}>{this.props.status}</span>
                </div>}
        </React.Fragment>


    }
}

export default ProfileStatus;