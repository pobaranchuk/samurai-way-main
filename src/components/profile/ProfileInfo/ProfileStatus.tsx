import React, {ChangeEvent} from 'react';

type StatusProps = {
    status: string
    updateUserStatus: (status: string) => void
}

class ProfileStatus extends React.Component<StatusProps, any> {
    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateUserStatus(this.state.status)
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({status: e.currentTarget.value})
    }
    componentDidUpdate (prevProps: StatusProps, PrevState: any){
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return <div>
            {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status || "---"}</span>
                </div>
            }
            {this.state.editMode &&
                <div>
                    <input onChange={this.onStatusChange} autoFocus={true} value={this.state.status}
                           onBlur={this.deactivateEditMode}/>
                </div>
            }
        </div>
    }

}

export default ProfileStatus;