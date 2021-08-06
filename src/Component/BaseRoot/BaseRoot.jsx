import { Component } from "react";
import ScrollCheckBox from "../ScrollCheckBox/ScrollCheckBox";
import './BaseRoot.css'

const initialScoreState = [{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0}, {HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0}, 0, {HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0}, {HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},]

class BaseRoot extends Component {
    constructor() {
        super();
        this.state = {
            soundScore: [
                [
                    {HeightNum: 0, time: 0},
                    {HeightNum: 0, time: 0},
                    {HeightNum: 0, time: 0},
                    {HeightNum: 0, time: 0},
                    {HeightNum: 0, time: 0},
                    {HeightNum: 0, time: 0},
                    {HeightNum: 0, time: 0},
                    {HeightNum: 0, time: 0},
                    {HeightNum: 0, time: 0},
                    {HeightNum: 0, time: 0},
                    {HeightNum: 0, time: 0}, 
                    {HeightNum: 0, time: 0},
                    {HeightNum: 0, time: 0},
                    {HeightNum: 0, time: 0},
                    {HeightNum: 0, time: 0},
                    {HeightNum: 0, time: 0},
                    {HeightNum: 0, time: 0},
                    {HeightNum: 0, time: 0},
                    {HeightNum: 0, time: 0},
                    {HeightNum: 0, time: 0},
                    {HeightNum: 0, time: 0},
                    {HeightNum: 0, time: 0}, 
                    {HeightNum: 0, time: 0}, 
                    {HeightNum: 0, time: 0},
                    {HeightNum: 0, time: 0},
                    {HeightNum: 0, time: 0},
                    {HeightNum: 0, time: 0},
                    {HeightNum: 0, time: 0},
                    {HeightNum: 0, time: 0},
                    {HeightNum: 0, time: 0},
                    {HeightNum: 0, time: 0},
                    {HeightNum: 0, time: 0},
                    {HeightNum: 0, time: 0},
                    {HeightNum: 0, time: 0}, 
                    {HeightNum: 0, time: 0},
                    {HeightNum: 0, time: 0},
                    {HeightNum: 0, time: 0},
                    {HeightNum: 0, time: 0},
                    {HeightNum: 0, time: 0},
                    {HeightNum: 0, time: 0},
                    {HeightNum: 0, time: 0},
                    {HeightNum: 0, time: 0},
                ],
            ],
            BPMValue: 0,
            titleValue: '',
            delayTime: 0
        }
    }
    add_single_beat = () => {
        this.setState({ soundScore: [...this.state.soundScore, [{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0}, {HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0}, {HeightNum: 0, time: 0}, {HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0}, {HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},]]})
    }
    add_series_beats = () => {
        this.setState({ soundScore: [...this.state.soundScore, [{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0}, {HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0}, {HeightNum: 0, time: 0}, {HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0}, {HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},]]})
    }
    add_many_series_beats = () => {
        this.setState({ soundScore: [...this.state.soundScore, [{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0}, {HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0}, {HeightNum: 0, time: 0}, {HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0}, {HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},],
            [{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0}, {HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0}, {HeightNum: 0, time: 0}, {HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0}, {HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},],
            [{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0}, {HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0}, {HeightNum: 0, time: 0}, {HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0}, {HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},],
            [{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0}, {HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0}, {HeightNum: 0, time: 0}, {HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0}, {HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},],
            [{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0}, {HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0}, {HeightNum: 0, time: 0}, {HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0}, {HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},{HeightNum: 0, time: 0},],
        ]})
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
        convertScore[stepNumber][placeNumber].HeightNum = heightNumber
        if(!heightNumber) {
            convertScore[stepNumber][placeNumber].time = 0
        }
        this.setState({soundScore: convertScore})
    }

    update_longnotes = ( stepNumber, placeNumber, longTime ) => {
        var convertScore = this.state.soundScore.slice()
        convertScore[stepNumber][placeNumber].time = longTime
        this.setState({soundScore: convertScore})
    }

    download_jsonfile = () => {
        const delay_time = ( 60/this.state.BPMValue )/2
        const rad = deg => deg*Math.PI/180;
        let download_score_data = []
        this.state.soundScore.forEach((stepData,stepIndex) => {
            console.log("array data;",stepData,stepIndex)
            stepData.forEach((columnData,columnIndex) => {
                console.log(columnData,columnIndex)
                if (columnData.HeightNum) {
                    console.log("hogehoge",(19-columnIndex)*-8.8 )
                    download_score_data.push({
                        "time": stepIndex * delay_time + parseFloat(this.state.delayTime),
                        "PopLocation": {
                            "x": 700*Math.cos(rad( (19-columnIndex)*-8.8 ) ),
                            "y": 700*Math.sin(rad( (19-columnIndex)*-8.8 ) ),
                            "z": columnData.HeightNum * 40,
                        },
                        "NotesType": columnData.time?"Long":"Single",
				        "LongNotesTime": columnData.time
                    })
                }
            })

        });
        
        
        console.log({result: download_score_data})
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
    onChange_delayTime_value = e => this.setState({delayTime:e.target.value})
    render() {
        return (
            <div className="BaseRoot">
                <div>
                    題名: <input value={this.state.titleValue} onChange={e=>this.onChange_Title_Value(e)}></input>
                    BPM: <input type="number" value={this.state.BPMValue} onChange={e=>this.onChange_BPM_value(e)}></input>
                    待機時間: <input type="number" value={this.state.delayTime} onChange={e=>this.onChange_delayTime_value(e)}></input>
                </div>
                <div>
                <button onClick={this.add_single_beat}>拍の追加</button>
              <button onClick={this.add_series_beats}>一連拍の追加</button>
              <button onClick={this.add_many_series_beats}>複数拍の追加</button>

              <button onClick={this.remove_single_beat}>末尾拍の追加</button>
              <button onClick={this.remove_series_beats}>末尾一連拍の追加</button>
              <button onClick={this.download_jsonfile}>書き出し</button>
                </div>
              <table>
                  { this.state.soundScore.map(( item, index) => (
                      <ScrollCheckBox time={( (60/this.state.BPMValue )/2 * index) + parseFloat(this.state.delayTime)} update_longnotes={this.update_longnotes} update_score={this.update_score} value={item} indexNumber={index} />
                  )) }
              </table>
              <button onClick={this.add_single_beat}>拍の追加</button>
              <button onClick={this.add_series_beats}>一連拍の追加</button>
              <button onClick={this.add_many_series_beats}>複数拍の追加</button>

              <button onClick={this.remove_single_beat}>末尾拍の追加</button>
              <button onClick={this.remove_series_beats}>末尾一連拍の追加</button>
              <button onClick={this.download_jsonfile}>書き出し</button>
            </div>
        )
    }
}

export default BaseRoot;