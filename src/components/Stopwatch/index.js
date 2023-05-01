import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {secs: 0, mins: 0, id: ''}

  //   increase = () => {}

  onStart = () => {
    //   when start button clicked state should be changed to true, initially state should be false
    //   count secs until 60 and then add plus one to minute
    // const {secs} = this.state

    const id = setInterval(() => {
      console.log('increase')
      const {secs} = this.state
      if (secs < 59) {
        this.setState(p => ({secs: p.secs + 1}))
      } else if (secs === 59) {
        this.setState(p => ({secs: 0, mins: p.mins + 1}))
      }
    }, 1000)

    this.setState({id})
  }

  onStop = () => {
    console.log('stop')
    const {id} = this.state
    clearInterval(id)
  }

  onReset = () => {
    console.log('pause')
    this.setState({secs: 0, mins: 0})
  }

  render() {
    const {secs, mins} = this.state
    return (
      <div className="home">
        <div className="left">
          <h1>Stopwatch</h1>
          <div className="timer-image">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
            />
            <p style={{marginLeft: '10px'}}>Timer</p>
          </div>
          <h2 className="time">
            {`${mins < 10 ? `0${mins}` : mins}:${
              secs < 10 ? `0${secs}` : secs
            }`}
          </h2>
          <div>
            <button type="button" onClick={this.onStart} className="green">
              Start
            </button>
            <button type="button" onClick={this.onStop} className="red">
              Stop
            </button>
            <button type="button" onClick={this.onReset} className="yellow">
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
