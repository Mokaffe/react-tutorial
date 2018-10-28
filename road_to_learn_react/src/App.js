import React from 'react';
import './App.css';

const list = [
  {
    title: 'React',
    url: 'https://facebook.github.io/react/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

// ES5
// function isSearched(searchTerm) {
//   return function(item) {
//     return item.title.toLowerCase().includes(searchTerm.toLowerCase());
//   }
// }

const isSearched = searchTerm => item =>
  item.title.toLowerCase().includes(searchTerm.toLowerCase());


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: list,
      searchTerm: '',
    };

    // 为了将onDismiss() 定义为类方法，需要在构造函数中绑定它。
    this.onDismiss = this.onDismiss.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onSearchChange(event) {
    this.setState({searchTerm: event.target.value});
  }


  // 这是个在类中的功能函数，也在类里面，为什么还需要在构造函数中绑定？
  onDismiss(id) {
    // eslint-disable-next-line
    console.log(this);
    const updateList = this.state.list.filter(item => item.objectID !== id);
    this.setState({
      list: updateList
    });
  }

  render() {
    const {list, searchTerm} = this.state;
    return (
      <div className="App">
        <Search value={searchTerm} onChange={this.onSearchChange}>Search test</Search>
        <Table list={list} pattern={searchTerm} onDismiss={this.onDismiss}/>
      </div>
    );
  }
}


// 强制使用 props作为输入，JSX作为输出
// 函数参数使用了解构方式
// const { value, onChange, children } = props;
const Search = ({value, onChange, children}) => {
  return (
    <form>
      {children}<input type="text" value={value} onChange={onChange}></input>
    </form>
  );
};


const Table = ({ list, pattern, onDismiss }) =>
  <div className="table">
    {list.filter(isSearched(pattern)).map(item =>
      <div key={item.objectID} className="table-row">
        <span><a href={item.url}>{item.title}</a></span>
        <span>{item.author}</span>
        <span>{item.num_comments}</span>
        <span>{item.points}</span>
        <span>
          <Button onClick={() => onDismiss(item.objectID)} className="button-inline">Dismiss</Button>
        </span>
      </div>
    )}
  </div>;

const Button = ({onClick, className='', children}) =>
  <button onClick={onClick} className={className} type="button">{children}</button>

export default App;
