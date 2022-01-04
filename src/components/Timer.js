import React, {Component} from 'react';

class Timer extends Component {
    constructor(props) {
      super(props);
      this.state = {date : new Date()};
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(), 1000
      );
      console.log(this);
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({
        date: new Date()
      });
    }
  
    render() {
      return (
        <div>{this.state.date.toLocaleString()}</div>
      );
    }
  }

export default Timer;