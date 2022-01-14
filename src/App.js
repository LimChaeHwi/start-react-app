import React, {Component} from 'react';
import Subject from './components/Subject'
import Timer from './components/Timer'
import Counter from './components/Counter'
import TOC from './components/TOC'
import ReadContent from './components/ReadContent'
import CreateContent from './components/CreateContent'
import UpdateContent from './components/UpdateContent'
import Control from './components/Control'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.max_content_id = 3;  //  key 로 사용 : id
    this.state = {
      mode: 'welcome',
      selected_content_id : 2,
      subject:{title: 'IT Trends', sub:'Information Technology Trends'},
      welcome:{title: 'Welcome', desc:'Hello, React..'},
      contents:[
        {id:1, title: 'block chain', desc: '체인 형태의 연결고리 기반 분산 데이터 저장 환경에 저장하여 관리하는 기술'},
        {id:2, title: 'metaverse', desc: '메타버스(metaverse) 또는 확장 가상 세계'},
        {id:3, title: 'NFT', desc: '대체 불가능 토큰(Non-fungible token, NFT)'}
      ]
    }
  }

  getReadContent() {
    var i = 0;
    while(i < this.state.contents.length) {
      var data = this.state.contents[i];
      if (data.id === this.state.selected_content_id) {
        //_title = data.title;
        //_desc = data.desc;
        return data;
      }
      i = i + 1;
    }
    return null;
  }

  getContent() {
    var _article, _contents, _contentData = null;

    if(this.state.mode === 'welcome') {
      var _title = this.state.welcome.title;
      var _desc = this.state.welcome.desc;
      _article = <ReadContent data={{title:_title, desc:_desc}}></ReadContent>;

    } else if (this.state.mode === 'read') {
      _contentData = this.getReadContent();
      _article = <ReadContent data={_contentData}></ReadContent>;

    } else if (this.state.mode === 'create') {
      _article = <CreateContent onSubmit={
        function(_title, _desc) {
          this.max_content_id = this.max_content_id + 1;
          //this.state.contents.push({id:this.max_content_id, title:_title, desc: _desc});  // 원본 데이터에 추가하는 push 함수는 지양
          _contents = this.state.contents.concat({id:this.max_content_id, title:_title, desc: _desc});
          //  Object.assign({}, 객체) : 객체의 경우, Array.from(배열) : 배열의 경우 
          this.setState({
            contents: _contents,
            mode: 'read',
            selected_content_id: this.max_content_id
          });
        }.bind(this)}></CreateContent>;

    } else if (this.state.mode === 'update') {
      _contentData = this.getReadContent();
      _article = <UpdateContent data={_contentData} onSubmit={
        function(_id, _title, _desc) {         
          var _contents = Array.from(this.state.contents);
          var i = 0;
          while (i < _contents.length) {
            if (_contents[i].id === _id) {
              _contents[i] = {id:_id, title:_title, desc:_desc};
              break;
            }
            i = i +1;
          }
          this.setState({
            contents: _contents,
            mode: 'read',
            selected_content_id: Number(_id)
          });
        }.bind(this)}>
        </UpdateContent>;
    }

    return _article;
  }

  render () {
    console.log('App.js render() : ' + this.state.mode);
    
    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function() {
            this.setState({mode: 'welcome'});
          }.bind(this)}
        ></Subject>
        <hr></hr>
        <Timer></Timer>
        <hr></hr>
        <Counter increment="1"></Counter>
        <hr></hr>
        <TOC onChangePage={
            function(id) {
              this.setState({mode:'read',
                selected_content_id:Number(id)
              });
            }.bind(this)}
          data={this.state.contents}
        ></TOC>
        <hr></hr>
        <Control onChangeMode={
          function(_mode) {
            if (_mode === 'delete') {
              if (window.confirm('really?')) {
                var _contents = Array.from(this.state.contents);
                var i = 0;
                console.log(this.state.selected_content_id);
                while (i < this.state.contents.length) {
                  if (_contents[i].id === this.state.selected_content_id) {
                    _contents.splice(i, 1);
                    break;
                  }
                  i = i+1;
                }

                this.setState({
                  mode: 'welcome',
                  contents: _contents
                });
                alert('deleted');
              }

            } else {
                this.setState({
                mode:_mode
              });
            }
          }.bind(this)}
        ></Control>
        <hr></hr>
        {this.getContent()}
        <hr></hr>
      </div>
    );
  }
}

export default App;
