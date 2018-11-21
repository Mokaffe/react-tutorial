import React from 'react';
import { Link } from 'react-router-dom'


export default props => {
    return (
        <div className="header">
            <div><Link to={`/todo_list`}>to do list</Link></div>
            <div><Link to={`/road_to_learn_react/1`}>road_to_learn_react</Link></div>
        </div>
    );
}


