import React from 'react'

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }
    handleSubmit(event){
        alert('A Task submitted: ' + this.state.value);
    }

    render() {
        return (
            <div>
                <hr />
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Add Task</label>
                        <div>
                            <input type="text" value={this.state.value} onChange={this.handleChange}></input>
                            <input type="submit" value="Save task"></input>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default TodoForm;