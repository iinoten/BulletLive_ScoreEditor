import React, { Component } from 'react';
import './ScrollCheckBox.css'
import TargetCheckBox from '../TargetCheckBox/TargetCheckBox';

class ScrollCheckBox extends Component {
    render() {
        return (
            <tr className="ScrollCheckBox">
                <div style={{fontSize: "0.8em"}}>{this.props.time}sec</div>
                <TargetCheckBox value={this.props.value[0].heightNum} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={0} />
                <TargetCheckBox value={this.props.value[1].heightNum} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={1} />
                <TargetCheckBox value={this.props.value[2].heightNum} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={2} />
                <TargetCheckBox value={this.props.value[3].heightNum} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={3} />
                <TargetCheckBox value={this.props.value[4].heightNum} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={4} />
                <TargetCheckBox value={this.props.value[5].heightNum} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={5} />
                <TargetCheckBox value={this.props.value[6].heightNum} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={6} />
                <TargetCheckBox value={this.props.value[7].heightNum} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={7} />
                <TargetCheckBox value={this.props.value[8].heightNum} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={8} />
                <TargetCheckBox value={this.props.value[9].heightNum} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={9} />

                <TargetCheckBox value={this.props.value[10].heightNum} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={10} />
                <TargetCheckBox value={this.props.value[11].heightNum} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={11} />
                <TargetCheckBox value={this.props.value[12].heightNum} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={12} />
                <TargetCheckBox value={this.props.value[13].heightNum} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={13} />
                <TargetCheckBox value={this.props.value[14].heightNum} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={14} />
                <TargetCheckBox value={this.props.value[15].heightNum} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={15} />
                <TargetCheckBox value={this.props.value[16].heightNum} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={16} />
                <TargetCheckBox value={this.props.value[17].heightNum} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={17} />
                <TargetCheckBox value={this.props.value[18].heightNum} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={18} />
                <TargetCheckBox value={this.props.value[19].heightNum} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={19} />

                <TargetCheckBox value={this.props.value[20].heightNum} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={20} />

                <TargetCheckBox value={this.props.value[21].heightNum} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={21} />
                <TargetCheckBox value={this.props.value[22].heightNum} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={22} />
                <TargetCheckBox value={this.props.value[23].heightNum} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={23} />
                <TargetCheckBox value={this.props.value[24].heightNum} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={24} />
                <TargetCheckBox value={this.props.value[25].heightNum} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={25} />
                <TargetCheckBox value={this.props.value[26].heightNum} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={26} />
                <TargetCheckBox value={this.props.value[27].heightNum} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={27} />
                <TargetCheckBox value={this.props.value[28].heightNum} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={28} />
                <TargetCheckBox value={this.props.value[29].heightNum} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={29} />
                <TargetCheckBox value={this.props.value[30].heightNum} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={30} />

                <TargetCheckBox value={this.props.value[31].heightNum} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={31} />
                <TargetCheckBox value={this.props.value[32].heightNum} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={32} />
                <TargetCheckBox value={this.props.value[33].heightNum} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={33} />
                <TargetCheckBox value={this.props.value[34].heightNum} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={34} />
                <TargetCheckBox value={this.props.value[35].heightNum} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={35} />
                <TargetCheckBox value={this.props.value[36].heightNum} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={36} />
                <TargetCheckBox value={this.props.value[37].heightNum} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={37} />
                <TargetCheckBox value={this.props.value[38].heightNum} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={38} />
                <TargetCheckBox value={this.props.value[39].heightNum} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={39} />
                <TargetCheckBox value={this.props.value[40].heightNum} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={40} />
            </tr>
        )
    }
}

export default ScrollCheckBox;