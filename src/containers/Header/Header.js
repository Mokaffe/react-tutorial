import React from 'react'
import { Link } from 'react-router-dom';

const Header = props => {
    return (
        <div className="header">
            <div><Link to={`/form_validation`}>表单校验</Link></div>
            <div><Link to={`/todo_list`}>to do list</Link></div>
            <div><Link to={`/road_to_learn_react/1`}>road_to_learn_react</Link></div>
            <div><Link to={`/react-select`}>React-Select package example</Link></div>
        </div>
    );
}

export default Header;