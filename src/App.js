import React, {Component} from 'react';
import Subject from './components/Subject'
import Timer from './components/Timer'
import Counter from './components/Counter'
import Contents from './components/Contents'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject:{title: 'IT Trends'},
      contents:[
        {id:1, title: 'block chain', desc: '체인 형태의 연결고리 기반 분산 데이터 저장 환경에 저장하여 관리하는 기술'},
        {id:2, title: 'metaverse', desc: '메타버스(metaverse) 또는 확장 가상 세계'},
        {id:3, title: 'NFT', desc: '대체 불가능 토큰(Non-fungible token, NFT)'}
      ]
    }
  }
  render () {
    return (
      <div className="App">
        <Subject title={this.state.subject.title}></Subject>
        <Timer></Timer>
        <Contents data={this.state.contents}></Contents>
        <Counter increment="1"></Counter>
      </div>
    );
  }
}

export default App;
