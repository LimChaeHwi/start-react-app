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
      /* 동일
        this.setState(function(state, props) {
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
      return <div>Count : {this.state.count}</div>;
    }
}

export default Counter;