import React from 'react'
import TodoItem from './TodoItem';
import TodoFooter from './TodoFooter'

const TodoList = (props) => {
    return (
        <ul className="list-group">
            {props.allTask.map(listItem => (
                <TodoItem key={listItem.id}
                    taskId={listItem.id}
                    task={listItem.task}
                    isComplete={listItem.isComplete}
                    toggleComplete={props.toggleComplete}
                />
            ))}
        </ul>)
}

export default TodoList;