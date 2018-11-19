import React, { Component } from "react";

export default class CoundownTimer extends Component {
  constructor() {
    super();
    this.state = {
      currentTime: 5,
      initialSeconds: 5
    };
    this.runTimer = this.runTimer.bind(this);
    this.reduceTime = this.reduceTime.bind(this);
    this.timeHandler = 0;
  }

  componentDidMount() {
    let timeLeft = this.state.initialSeconds;
    this.setState({ currentTime: timeLeft });
    this.runTimer();
  }

  reduceTime() {
    this.setState({
      initialSeconds: this.state.initialSeconds - 1,
      currentTime: this.state.initialSeconds - 1
    });

    if (this.state.initialSeconds == 0) {
      clearInterval(this.timeHandler);
    }
  }

  runTimer() {
    this.timeHandler = setInterval(this.reduceTime, 1000);
  }

  render() {
    return(
      <div>
        Arrival Time {this.state.currentTime} Seconds
      </div>
    );
  }
}
