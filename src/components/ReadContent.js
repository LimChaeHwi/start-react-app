import React, {Component} from 'react';

class ReadContent extends Component {
    render () {
      return (
        <header>
          <h2>{this.props.data.title}</h2>
          {this.props.data.desc}
        </header>
      );
    }
}

export default ReadContent;