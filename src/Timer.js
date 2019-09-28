import React, { Component } from 'react';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            minute: 0,
            second: 0,
            mSecond: 0
        }
    }
    timerStartsNow(e) {
        e.preventDefault();
        this.setState(state => {
            this.timer = setInterval(() => {
                const { minute, second, mSecond } = this.state;
                if (mSecond > 0) {
                    this.setState(({ }) => ({
                        mSecond: mSecond - 1
                    }))
                } else {
                    if (second > 0) {
                        this.setState(({ }) => ({
                            second: second - 1,
                            mSecond: 59
                        }))
                    } else {
                        if (minute === 0) {
                            clearInterval(this.timer)
                        } else {
                            this.setState(({ }) => ({
                                minute: minute - 1,
                                second: 59
                            }))
                        }
                    }
                }

            }, 1000 / 60);

        })

    }
    timerStop(e){
        e.preventDefault();
        clearInterval(this.timer)
    }
    timerReset(e){
        e.preventDefault();
        this.setState({minute: 0})
        this.setState({second: 0})
        this.setState({mSecond: 0})
    }
    render() {
        return (
            <div>
                <h1>Timer Countdown</h1>
                <h1>{this.state.minute} : {this.state.second} : {this.state.mSecond}</h1>
                <input onChange={(e) => this.setState({ minute: (e.target.value) })}></input><br />
                <button onClick={(e) => this.timerStartsNow(e)}>Start</button>
                <button onClick={(e) => this.timerStop(e)}>Stop </button>
                <button onClick={(e) => this.timerReset(e)}>Reset</button>
            </div>
        )
    }
}
export default Timer;