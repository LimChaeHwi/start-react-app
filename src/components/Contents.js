import React, {Component} from 'react';

class Contents extends Component {
    render () {
      var list = [];
      var data = this.props.data;
      data.forEach(obj => {
        list.push(<li key={obj.id}><a href={obj.id}>{obj.title}</a></li>);
      });
      
      return (
        <nav>
          <ul>
            {list}
          </ul>
        </nav>
      );
    }}

export default Contents;