import React from 'react'
import TodoList from './TodoList'
import TodoForm from './TodoForm'
import { generateId, addTodo } from '../utility/todoHelpers'

class TodoBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allTask: [
                { "id": "0001", "task": "吃饭", "isComplete": false },
                { "id": "0002", "task": "睡觉", "isComplete": false },
                { "id": "0003", "task": "打豆豆", "isComplete": true },
            ],
            currentTodoTask: '',
            errorMessage: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEmptySubmit = this.handleEmptySubmit.bind(this)
    }



    handleSubmit(event) {
        event.preventDefault(); // 这个是什么意思
        const newTaskId = generateId();
        const newTask = { "id": newTaskId, "task": this.state.currentTodoTask, "isComplete": false }
        const updatedAllTask = addTodo(this.state.allTask, newTask)
        this.setState({
            allTask: updatedAllTask,
            currentTodoTask: '',
            errorMessage: ''
        });
    }

    handleEmptySubmit(event) {
        event.preventDefault();
        this.setState({
            errorMessage: "Please enter a valid todo task."
        })
    }

    handleInputChange(event) {
        this.setState({
            currentTodoTask: event.target.value
        })
    }

    render() {
        return (
            <div className="well">
                <TodoList allTask={this.state.allTask} />
                <hr />
                {this.state.errorMessage && <p style={{ 'color': 'red' }}>{this.state.errorMessage}</p>}
                <TodoForm
                    handleInputChange={this.handleInputChange}
                    currentTodoTask={this.state.currentTodoTask}
                    handleSubmit={this.state.currentTodoTask ? this.handleSubmit : this.handleEmptySubmit}
                />
            </div>
        )
    }
}

export default TodoBox;