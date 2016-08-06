import React, { Component } from 'react'
// import
export default class Remaining extends Component {
  constructor(props){
    super(props);
  }

  render() {
    let styles = {
      height: '100px',
      width: '100px',
      backgroundColor: '#000',
      opacity: '0.5',
      margin: '0 auto',
      borderRadius: '5px',
    };
    return (
      <div classNameName="text-center">
        <h1>Time Remaining</h1>
        <div className="container">
          <div className="page-header">
            <h1 className="text-center">Pomodoro Timer</h1>
            <h2 className="text-center">
              <span>
                <button id="pomodoroButton" className="btn btn-default" type="submit" onclick="onPomodoroTimer()" >Pomodoro</button>
                <button id="shortButton" className="btn btn-default" type="submit" onclick="onShortTimer()">Short Break</button>
                <button id="longButton" className="btn btn-default" type="submit" onclick="onLongTimer()">Long Break</button>
              </span>
            </h2>
          </div>
          <div className="panel panel-default">
            <div className="panel-body text-center">
              <div className="timer-time timer-container">
                <div className="timer-time-set timer-box" id="currentTime">
                  <span id="hoursValue">00</span><span>:</span><span id="minutesValue">00</span><span>:</span><span id="secondsValue">00</span>
                </div>
                <div className="timer-time-set timer-box" id="nextTime">
                  <span id="hoursNext">00</span><span>:</span><span id="minutesNext">00</span><span>:</span><span id="secondsNext">00</span>
                </div>
              </div>
              <div>
                <button id="restartButton" className="btn btn-warning btn-lg" type="submit" onclick="onResetTimer()">
                  <span className="glyphicon glyphicon-step-backward" aria-hidden="true"></span> Reset
                </button>
                <button id="startButton" className="btn btn-primary btn-lg" type="submit" onclick="onStartTimer()">
                  <span className="glyphicon glyphicon-play" aria-hidden="true"></span> Start
                </button>
                <button id="stopButton" className="btn btn-danger btn-lg" type="submit" onclick="onStopTimer()">
                  <span className="glyphicon glyphicon-stop" aria-hidden="true"></span> Stop
                </button>
              </div>
            </div>

          </div>

        </div>



      </div>
    )
  }
}
