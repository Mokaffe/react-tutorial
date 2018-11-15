import React from 'react'

const TodoForm = (props) => {
    return (
        <div>
            <form className="form-horizontal" onSubmit={props.handleSubmit}>
                <div className="form-group">
                    <label className="col-md-2 control-label">Add Task</label>
                    <div className="col-md-10">
                        <input type="text" className="form-control" value={props.currentTodoTask} onChange={props.handleInputChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-right">
                        <input type="submit" value="Save task" className="btn btn-primary"/>
                    </div>
                </div>
            </form>
        </div >
    )
}

export default TodoForm;