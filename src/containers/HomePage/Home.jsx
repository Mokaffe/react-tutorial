import React from 'react'
import {Link} from 'react-router-dom';

const style = {
  item: {
    height: '30px',
    fontSize: '18px',
    margin: '10px 0px',
  },
  link: {
    textDecoration: 'none',
    color: 'blue',
  }
};

const Home = () => {
  return (
    <div>
      <div style={style.item}><Link style={style.link} to={`/rc_form`}>rc-form</Link></div>
      <div style={style.item}><Link style={style.link} to={`/todo_list`}>to do list</Link></div>
      <div style={style.item}><Link style={style.link} to={`/road_to_learn_react/1`}>road_to_learn_react</Link></div>
      <div style={style.item}><Link style={style.link} to={`/react-select`}>react-select 学习</Link></div>
      <div style={style.item}><Link style={style.link} to={`/js-normal-q`}>JavaScript 常见问题</Link></div>
    </div>
  );
}

export default Home;
