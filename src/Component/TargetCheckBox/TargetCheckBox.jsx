import "./TargetCheckBox.css"
import React, {Component} from 'react'
import ReactTooltip from "react-tooltip"

class TargetCheckBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            heightNumber: props.value,
            isChecked: Boolean(props.value),
            isLongNotes: Boolean(props.longNotesVal),
            forTimeLongnotes: props.longNotesVal
        }
    }
    onToggle_Checkbox = val => console.log(val)
    onLeftClick_Box = event => {
        const key_event = event || window.event;
        console.log(key_event.shiftKey)
        if(key_event.shiftKey) {
            if(this.state.isChecked) {
                let inputTimeParams = window.prompt("何秒までのロングノーツを配置しますか")
                console.log(inputTimeParams,"までの時間のロングノーツを置く")
                this.props.update_longnotes(this.props.number,parseFloat(inputTimeParams))
                this.setState({isLongNotes: true, forTimeLongnotes: inputTimeParams})
            }
        } else {
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
    }
    onRightClick_Box = event => {
        event.preventDefault()
        this.props.onChange(this.props.number, 0)
        this.setState({ isChecked: false, isLongNotes: false, forTimeLongnotes: 0 })
    }
    componentDidMount() {
        this.setState({
            heightNumber: this.props.value,
            isChecked: Boolean(this.props.value),
            isLongNotes: Boolean(this.props.longNotesVal),
            forTimeLongnotes: this.props.longNotesVal
        })
        /*
        console.log(this.props.value,{
            heightNumber: this.props.value,
            isChecked: Boolean(this.props.value),
            isLongNotes: Boolean(this.props.longNotesVal),
            forTimeLongnotes: this.props.longNotesVal
        })
        */
    }
    
    render() {
        if(this.props.value) console.log(this.props.value)
        return (
            <td data-tip={this.state.forTimeLongnotes?(this.state.forTimeLongnotes+" 秒まで"):null} onClick={this.onLeftClick_Box} onContextMenu={this.onRightClick_Box} className="TargetCheckBox" >
                {Boolean(this.props.value) && <div className="TargetCheckBox__Point" style={{backgroundColor: this.state.isLongNotes?"#daa4a4":"#c0c0c0"}}>{this.props.value}</div>}
                {this.state.isLongNotes ? <ReactTooltip effect="float" type="info" place="right" />: null}
            </td>
        )
    }
}

export default TargetCheckBox;
