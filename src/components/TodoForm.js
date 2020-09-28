import React from 'react';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
            <input type='text' value={this.props.state.textInput} onChange={this.props.handleInputChange} placeholder='Enter a task!' />
            <button onClick={this.props.handleAddItem}>Create Task</button>
            <button onClick={this.props.handleClearCompleted}>Clear Completed</button>
            </>
        )
    }
}

export default TodoForm;