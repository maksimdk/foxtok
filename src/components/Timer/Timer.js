import React, { Component } from 'react';

export class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      intervalId: null,
      seconds: 0,
    };
  }

  componentDidMount() {
    const intervalId = setInterval(() => {
      this.setState((prevState) => ({
        ...prevState,
        seconds: prevState.seconds + 1,
      }));
    }, 1000);

    this.setState({ intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId );
  }

  render() {
    return <div>{this.state.seconds}</div>;
  }
}
