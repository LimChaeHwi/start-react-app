import React, {Component} from 'react';

class Counter extends Component {
    constructor(props) {
      super(props);
      this.state = {count:0};
    }
    
    counter() {
      this.setState((state, props)=>({
        count : state.count + Number(props.increment)
      }));
      /*this.setState(function(state, props) {
        return {
          count : state.count + Number(props.increment)
        }
      });*/
    }
  
    componentDidMount(){
      this.counter();
      this.counter();
      this.counter();
    }
  
    componentWillUnmount() {}
  
    render() {
      return (this.state.count);
    }
}

export default Counter;