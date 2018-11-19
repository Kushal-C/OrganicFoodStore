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
    if(this.state.initialSeconds == 0) {
      alert("Order has arrived");
      return(
        <div className="card" style={{ width: "207%" }}>
          <div className="row col-md-12" style={{ marginTop:'10px', marginBottom:'10px' }}>
            <div className="col-md-6 text-left">
              Arrival Time: {this.state.currentTime}
            </div>
            <div className="col-md-6 text-right">
              Order Status: Complete
          </div>
        </div>
      </div>
      );
    }
    else {
      return (
        <div className="card" style={{ width: "207%" }}>
          <div className="row col-md-12" style={{ marginTop:'10px', marginBottom:'10px' }}>
            <div className="col-md-6 text-left">
              Arrival Time: {this.state.currentTime}
            </div>
            <div className="col-md-6 text-right">
              Order Status: {this.props.order_status}
          </div>
        </div>
      </div>
      );
    }
  }
}
