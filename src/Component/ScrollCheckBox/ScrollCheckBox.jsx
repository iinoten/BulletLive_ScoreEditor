import React, { Component } from 'react';
import './ScrollCheckBox.css'
import TargetCheckBox from '../TargetCheckBox/TargetCheckBox';

class ScrollCheckBox extends Component {
    render() {
        return (
            <tr className="ScrollCheckBox">
                <div>{this.props.time}sec</div>
                <TargetCheckBox value={this.props.value[0]} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={0} />
                <TargetCheckBox value={this.props.value[1]} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={1} />
                <TargetCheckBox value={this.props.value[2]} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={2} />
                <TargetCheckBox value={this.props.value[3]} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={3} />
                <TargetCheckBox value={this.props.value[4]} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={4} />
                <TargetCheckBox value={this.props.value[5]} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={5} />
                <TargetCheckBox value={this.props.value[6]} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={6} />
                <TargetCheckBox value={this.props.value[7]} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={7} />
                <TargetCheckBox value={this.props.value[8]} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={8} />
                <TargetCheckBox value={this.props.value[9]} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={9} />

                <TargetCheckBox value={this.props.value[10]} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={10} />
                <TargetCheckBox value={this.props.value[11]} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={11} />
                <TargetCheckBox value={this.props.value[12]} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={12} />
                <TargetCheckBox value={this.props.value[13]} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={13} />
                <TargetCheckBox value={this.props.value[14]} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={14} />
                <TargetCheckBox value={this.props.value[15]} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={15} />
                <TargetCheckBox value={this.props.value[16]} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={16} />
                <TargetCheckBox value={this.props.value[17]} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={17} />
                <TargetCheckBox value={this.props.value[18]} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={18} />
                <TargetCheckBox value={this.props.value[19]} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={19} />

                <TargetCheckBox value={this.props.value[20]} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={20} />

                <TargetCheckBox value={this.props.value[21]} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={21} />
                <TargetCheckBox value={this.props.value[22]} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={22} />
                <TargetCheckBox value={this.props.value[23]} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={23} />
                <TargetCheckBox value={this.props.value[24]} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={24} />
                <TargetCheckBox value={this.props.value[25]} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={25} />
                <TargetCheckBox value={this.props.value[26]} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={26} />
                <TargetCheckBox value={this.props.value[27]} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={27} />
                <TargetCheckBox value={this.props.value[28]} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={28} />
                <TargetCheckBox value={this.props.value[29]} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={29} />
                <TargetCheckBox value={this.props.value[30]} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={30} />

                <TargetCheckBox value={this.props.value[31]} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={31} />
                <TargetCheckBox value={this.props.value[32]} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={32} />
                <TargetCheckBox value={this.props.value[33]} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={33} />
                <TargetCheckBox value={this.props.value[34]} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={34} />
                <TargetCheckBox value={this.props.value[35]} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={35} />
                <TargetCheckBox value={this.props.value[36]} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={36} />
                <TargetCheckBox value={this.props.value[37]} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={37} />
                <TargetCheckBox value={this.props.value[38]} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={38} />
                <TargetCheckBox value={this.props.value[39]} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={39} />
                <TargetCheckBox value={this.props.value[40]} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={40} />
            </tr>
        )
    }
}

export default ScrollCheckBox;