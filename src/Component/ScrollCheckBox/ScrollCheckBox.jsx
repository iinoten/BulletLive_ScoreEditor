import React, { Component } from 'react';
import './ScrollCheckBox.css'
import TargetCheckBox from '../TargetCheckBox/TargetCheckBox';

class ScrollCheckBox extends Component {
    render() {
        console.log(this.props.value)
        return (
            <tr className="ScrollCheckBox">
                <div style={{fontSize: "0.8em"}}>{this.props.time}sec</div>
                <TargetCheckBox update_longnotes={(number,value)=>this.props.update_longnotes(this.props.indexNumber, number, value)} value={this.props.value[0].HeightNum} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={0} />
                <TargetCheckBox update_longnotes={(number,value)=>this.props.update_longnotes(this.props.indexNumber, number, value)} value={this.props.value[1].HeightNum} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={1} />
                <TargetCheckBox update_longnotes={(number,value)=>this.props.update_longnotes(this.props.indexNumber, number, value)} value={this.props.value[2].HeightNum} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={2} />
                <TargetCheckBox update_longnotes={(number,value)=>this.props.update_longnotes(this.props.indexNumber, number, value)} value={this.props.value[3].HeightNum} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={3} />
                <TargetCheckBox update_longnotes={(number,value)=>this.props.update_longnotes(this.props.indexNumber, number, value)} value={this.props.value[4].HeightNum} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={4} />
                <TargetCheckBox update_longnotes={(number,value)=>this.props.update_longnotes(this.props.indexNumber, number, value)} value={this.props.value[5].HeightNum} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={5} />
                <TargetCheckBox update_longnotes={(number,value)=>this.props.update_longnotes(this.props.indexNumber, number, value)} value={this.props.value[6].HeightNum} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={6} />
                <TargetCheckBox update_longnotes={(number,value)=>this.props.update_longnotes(this.props.indexNumber, number, value)} value={this.props.value[7].HeightNum} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={7} />
                <TargetCheckBox update_longnotes={(number,value)=>this.props.update_longnotes(this.props.indexNumber, number, value)} value={this.props.value[8].HeightNum} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={8} />
                <TargetCheckBox update_longnotes={(number,value)=>this.props.update_longnotes(this.props.indexNumber, number, value)} value={this.props.value[9].HeightNum} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={9} />

                <TargetCheckBox update_longnotes={(number,value)=>this.props.update_longnotes(this.props.indexNumber, number, value)} value={this.props.value[10].HeightNum} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={10} />
                <TargetCheckBox update_longnotes={(number,value)=>this.props.update_longnotes(this.props.indexNumber, number, value)} value={this.props.value[11].HeightNum} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={11} />
                <TargetCheckBox update_longnotes={(number,value)=>this.props.update_longnotes(this.props.indexNumber, number, value)} value={this.props.value[12].HeightNum} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={12} />
                <TargetCheckBox update_longnotes={(number,value)=>this.props.update_longnotes(this.props.indexNumber, number, value)} value={this.props.value[13].HeightNum} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={13} />
                <TargetCheckBox update_longnotes={(number,value)=>this.props.update_longnotes(this.props.indexNumber, number, value)} value={this.props.value[14].HeightNum} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={14} />
                <TargetCheckBox update_longnotes={(number,value)=>this.props.update_longnotes(this.props.indexNumber, number, value)} value={this.props.value[15].HeightNum} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={15} />
                <TargetCheckBox update_longnotes={(number,value)=>this.props.update_longnotes(this.props.indexNumber, number, value)} value={this.props.value[16].HeightNum} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={16} />
                <TargetCheckBox update_longnotes={(number,value)=>this.props.update_longnotes(this.props.indexNumber, number, value)} value={this.props.value[17].HeightNum} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={17} />
                <TargetCheckBox update_longnotes={(number,value)=>this.props.update_longnotes(this.props.indexNumber, number, value)} value={this.props.value[18].HeightNum} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={18} />
                <TargetCheckBox update_longnotes={(number,value)=>this.props.update_longnotes(this.props.indexNumber, number, value)} value={this.props.value[19].HeightNum} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={19} />

                <TargetCheckBox update_longnotes={(number,value)=>this.props.update_longnotes(this.props.indexNumber, number, value)} value={this.props.value[20].HeightNum} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={20} />

                <TargetCheckBox update_longnotes={(number,value)=>this.props.update_longnotes(this.props.indexNumber, number, value)} value={this.props.value[21].HeightNum} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={21} />
                <TargetCheckBox update_longnotes={(number,value)=>this.props.update_longnotes(this.props.indexNumber, number, value)} value={this.props.value[22].HeightNum} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={22} />
                <TargetCheckBox update_longnotes={(number,value)=>this.props.update_longnotes(this.props.indexNumber, number, value)} value={this.props.value[23].HeightNum} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={23} />
                <TargetCheckBox update_longnotes={(number,value)=>this.props.update_longnotes(this.props.indexNumber, number, value)} value={this.props.value[24].HeightNum} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={24} />
                <TargetCheckBox update_longnotes={(number,value)=>this.props.update_longnotes(this.props.indexNumber, number, value)} value={this.props.value[25].HeightNum} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={25} />
                <TargetCheckBox update_longnotes={(number,value)=>this.props.update_longnotes(this.props.indexNumber, number, value)} value={this.props.value[26].HeightNum} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={26} />
                <TargetCheckBox update_longnotes={(number,value)=>this.props.update_longnotes(this.props.indexNumber, number, value)} value={this.props.value[27].HeightNum} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={27} />
                <TargetCheckBox update_longnotes={(number,value)=>this.props.update_longnotes(this.props.indexNumber, number, value)} value={this.props.value[28].HeightNum} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={28} />
                <TargetCheckBox update_longnotes={(number,value)=>this.props.update_longnotes(this.props.indexNumber, number, value)} value={this.props.value[29].HeightNum} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={29} />
                <TargetCheckBox update_longnotes={(number,value)=>this.props.update_longnotes(this.props.indexNumber, number, value)} value={this.props.value[30].HeightNum} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={30} />

                <TargetCheckBox update_longnotes={(number,value)=>this.props.update_longnotes(this.props.indexNumber, number, value)} value={this.props.value[31].HeightNum} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={31} />
                <TargetCheckBox update_longnotes={(number,value)=>this.props.update_longnotes(this.props.indexNumber, number, value)} value={this.props.value[32].HeightNum} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={32} />
                <TargetCheckBox update_longnotes={(number,value)=>this.props.update_longnotes(this.props.indexNumber, number, value)} value={this.props.value[33].HeightNum} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={33} />
                <TargetCheckBox update_longnotes={(number,value)=>this.props.update_longnotes(this.props.indexNumber, number, value)} value={this.props.value[34].HeightNum} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={34} />
                <TargetCheckBox update_longnotes={(number,value)=>this.props.update_longnotes(this.props.indexNumber, number, value)} value={this.props.value[35].HeightNum} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={35} />
                <TargetCheckBox update_longnotes={(number,value)=>this.props.update_longnotes(this.props.indexNumber, number, value)} value={this.props.value[36].HeightNum} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={36} />
                <TargetCheckBox update_longnotes={(number,value)=>this.props.update_longnotes(this.props.indexNumber, number, value)} value={this.props.value[37].HeightNum} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={37} />
                <TargetCheckBox update_longnotes={(number,value)=>this.props.update_longnotes(this.props.indexNumber, number, value)} value={this.props.value[38].HeightNum} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={38} />
                <TargetCheckBox update_longnotes={(number,value)=>this.props.update_longnotes(this.props.indexNumber, number, value)} value={this.props.value[39].HeightNum} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={39} />
                <TargetCheckBox update_longnotes={(number,value)=>this.props.update_longnotes(this.props.indexNumber, number, value)} value={this.props.value[40].HeightNum} onChange={(number,value)=>this.props.update_score(this.props.indexNumber, number, value)} number={40} />
            </tr>
        )
    }
}

export default ScrollCheckBox;