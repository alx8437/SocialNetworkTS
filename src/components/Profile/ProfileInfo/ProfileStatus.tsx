import React, {ChangeEvent, KeyboardEvent, useEffect, useState} from "react";

type PropsType = {
    status: string,
    updateStatus: (status: string) => void,
};

const ProfileStatus = (props: PropsType) => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])


    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status)
        debugger
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        const status = e.currentTarget.value
        setStatus(status)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            deactivateEditMode()
        }
    }


    return <React.Fragment>
        {editMode
            ?
            <div>
                <input
                    onChange={onStatusChange}
                    autoFocus={true}
                    onBlur={deactivateEditMode}
                    value={status}
                    onKeyPress={onKeyPressHandler}
                />
            </div>
            :
            <div>
                <span onDoubleClick={activateEditMode}>{props.status || "no status"}</span>
            </div>}
    </React.Fragment>

}

export default ProfileStatus;