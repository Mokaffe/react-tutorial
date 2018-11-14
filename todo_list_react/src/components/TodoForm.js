import React from 'react'

const TodoForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <label>Add Task</label>
                    <div>
                        <input type="text" value={props.currentTodoTask} onChange={props.handleInputChange} />
                        <input type="submit" value="Save task" />
                    </div>
                </div>
            </form>
        </div >
    )
}

export default TodoForm;