import React, {ChangeEvent, KeyboardEvent} from "react";

type PropsType = {
    status: string,
    updateStatus: (status: string) => void,
};

type LocalStateType = {
    editMode: boolean,
    status: string,
}

class ProfileStatus extends React.Component<PropsType> {

    state: LocalStateType = {
        editMode: false,
        status: this.props.status,
    }

    activateEditMode = () => {
        this.setState(() => {
            return {editMode: true}
        })
    }

    deactivateEditMode = () => {
        this.setState(() => {
            return {editMode: false};
        });
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        const status = e.currentTarget.value
        this.setState(() => {
            return {status};
        })
    }
    onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            this.deactivateEditMode()
        }
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<LocalStateType>): void {
        if (prevProps.status !== this.props.status) {
            this.setState(() => {
               return {status: this.props.status}
            });
        }
    }

    render() {
        return <React.Fragment>
            {this.state.editMode
                ?
                <div>
                    <input
                        onChange={this.onStatusChange}
                        autoFocus={true}
                        onBlur={this.deactivateEditMode}
                        value={this.state.status}
                        onKeyPress={this.onKeyPressHandler}
                    />
                </div>
                :
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status || "no status"}</span>
                </div>}
        </React.Fragment>


    }
}

export default ProfileStatus;