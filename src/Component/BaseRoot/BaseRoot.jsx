import { Component } from "react";
import ScrollCheckBox from "../ScrollCheckBox/ScrollCheckBox";
import './BaseRoot.css'

const initialScoreState = [0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0]

class BaseRoot extends Component {
    constructor() {
        super();
        this.state = {
            soundScore: [
                [0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0],
            ],
            BPMValue: 0,
            titleValue: ''
        }
    }
    add_single_beat = () => {
        this.setState({ soundScore: [...this.state.soundScore, [0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0]]})
    }
    add_series_beats = () => {
        this.setState({ soundScore: [...this.state.soundScore, [0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0]]})
    }

    remove_single_beat = () => {
        let tempState = this.state.soundScore
        tempState.pop()
        this.setState( plevState => {
            return{ soundScore: tempState }
        })
    }
    remove_series_beats = () => {
        let tempState = this.state.soundScore
        tempState.splice(-5,5)
        this.setState( plevState => {
            return{ soundScore: tempState }
        })
    }
    update_score = ( stepNumber, placeNumber, heightNumber ) => {
        var convertScore = this.state.soundScore.slice()
        convertScore[stepNumber][placeNumber] = heightNumber
        console.log("updated",convertScore)
        this.setState({soundScore: convertScore})
    }

    download_jsonfile = () => {
        const delay_time = ( 60/this.state.BPMValue )/5
        const rad = deg => deg*Math.PI/180;
        let download_score_data = []
        this.state.soundScore.forEach((stepData,stepIndex) => {
            console.log(stepData,stepIndex)
            stepData.forEach((columnData,columnIndex) => {
                if (columnData) {
                    download_score_data.push({
                        "time": stepIndex * delay_time,
                        "PopLocation": {
                            "x": 700*Math.cos(rad( (20-columnIndex)*8.8 )),
                            "y": 700*Math.sin(rad( (20-columnIndex)*8.8 )),
                            "z": columnData * 40,
                        }
                    })
                }
            })

        });
        
        
        console.log({result: this.state.soundScore})
        const fileName = 'finename.json';
        const data = new Blob([JSON.stringify({
            Name: this.state.titleValue,
            Notes: download_score_data
        })], { type: 'text/json' });
        const jsonURL = window.URL.createObjectURL(data);
        const link = document.createElement('a');
        document.body.appendChild(link);
        link.href = jsonURL;
        link.setAttribute('download', fileName);
        link.click();
        document.body.removeChild(link);
    }
    onChange_BPM_value = e => this.setState({BPMValue: e.target.value})
    onChange_Title_Value = e => this.setState({titleValue:e.target.value})
    
    render() {
        return (
            <div className="BaseRoot">
              題名: <input value={this.state.titleValue} onChange={e=>this.onChange_Title_Value(e)}></input>
              BPM: <input type="number" value={this.state.BPMValue} onChange={e=>this.onChange_BPM_value(e)}></input>
              <table>
                  { this.state.soundScore.map(( item, index) => (
                      <ScrollCheckBox time={( 60/this.state.BPMValue )/5 * index} update_score={this.update_score} value={item} indexNumber={index} />
                  )) }
              </table>
              <button onClick={this.add_single_beat}>拍の追加</button>
              <button onClick={this.add_series_beats}>5拍の追加</button>

              <button onClick={this.remove_single_beat}>末尾拍の追加</button>
              <button onClick={this.remove_series_beats}>末尾5拍の追加</button>
              <button onClick={this.download_jsonfile}>書き出し</button>
            </div>
        )
    }
}

export default BaseRoot;