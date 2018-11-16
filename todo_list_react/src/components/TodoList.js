import React from 'react'
import TodoItem from './TodoItem';

class TodoList extends React.Component {

    render() {
        return (
            <ul className="list-group">
                {this.props.allTask.map(listItem => (
                    <TodoItem key={listItem.id}
                        taskId={listItem.id}
                        task={listItem.task}
                        isComplete={listItem.isComplete}
                        toggleComplete={this.props.toggleComplete}
                    />
                ))}
            </ul>
        )
    }
}

export default TodoList;