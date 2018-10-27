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

class App extends React.Component{
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
    this.setState({ searchTerm: event.target.value });
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
    return (
      <div className="App">
        <h1>表单交互</h1>
        <form>
          <input onChange={() => this.onSearchChange}
            type="text"/>
        </form>
        <span>-----------------</span>
        {this.state.list.map((item) =>
          <div key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
            <span>
              <button onClick={() => this.onDismiss(item.objectID)}
                      type="button">
                Dismiss
              </button>
            </span>
          </div>
        )}
      </div>
    );
  }
}

export default App;
