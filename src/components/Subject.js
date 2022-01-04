import React, {Component} from 'react';

class Subject extends Component {
    render () {
      return (
        <header>
          <h1>
          {this.props.title} (React)
          </h1>
        </header>
      );
    }
}

export default Subject;