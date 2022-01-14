import React, {Component} from 'react';

class TOC extends Component {
    shouldComponentUpdate(newProps, newState) {
      console.log('TOC shouldComponentUpdate');
      /* 원본 데이터와 동일한 경우 render() 실행하지 않도록 */
      if (this.props.data === newProps.data) {
        return false;
      }
      return true;
    }

    render () {
      console.log('TOC render');
      var list = [];
      var data = this.props.data;
      data.forEach(obj => {
        list.push(<li key={obj.id}>
          <a href={"/content/"+obj.id}
            data-id={obj.id}
            onClick={function(e) {
              e.preventDefault();
              this.props.onChangePage(e.target.dataset.id);
            }.bind(this)}
          >{obj.title}</a>
          </li>);
      });
      
      return (
        <nav>
          <ul>
            {list}
          </ul>
        </nav>
      );
    }}

export default TOC;