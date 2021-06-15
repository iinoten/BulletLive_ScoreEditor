import "./TargetCheckBox.css"
import React, {Component} from 'react'

class TargetCheckBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            heightNumber: props.value,
            isChecked: Boolean(props.value)
        }
    }
    onToggle_Checkbox = val => console.log(val)
    onLeftClick_Box = () => {
        this.setState({ isChecked: true })
        if( !this.state.isChecked ) {
            this.setState({ heightNumber: 5 })
            this.props.onChange(this.props.number, 5)
        } else {
            if(this.state.heightNumber < 9) {
                this.props.onChange(this.props.number, this.state.heightNumber+1)
                this.setState ({ heightNumber: this.state.heightNumber+1 })
            } else {
                this.setState ({ heightNumber: 1 })
                this.props.onChange(this.props.number, 1)
            }
        }
    }
    onRightClick_Box = event => {
        event.preventDefault()
        this.props.onChange(this.props.number, 0)
        this.setState({ isChecked: false })
    }
    render() {
        return (
            <td onClick={this.onLeftClick_Box} onContextMenu={this.onRightClick_Box} className="TargetCheckBox" >
                {this.state.isChecked && <div className="TargetCheckBox__Point">{this.state.heightNumber}</div>}
            </td>
        )
    }
}

export default TargetCheckBox;
