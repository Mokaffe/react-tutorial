import React from 'react'
import { partial } from '../../utility/todoHelpers'

const TodoItem = props => {

    const toggleComplete = partial(props.toggleComplete, props.taskId);
    const task = props.isComplete ? <s>{props.task}</s> : <span>{props.task}</span>;
    return (
        <li>
            <input type="checkbox" checked={props.isComplete} onChange={toggleComplete} />
            {task}
            <div className="pull-right">
                <button type="button" className="btn btn-xs close">删除</button>
            </div>
        </li>
    );
}

export default TodoItem;