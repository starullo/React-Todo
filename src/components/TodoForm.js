import React from 'react';

const TodoForm = (props) => {

        return (
            <>
            <input onKeyPress={e=>{
                if (e.key === 'Enter') {
                    props.handleAddItem(e);
                }
            }} type='text' value={props.state.textInput} onChange={props.handleInputChange} placeholder='Enter a task!' />
            <button onClick={props.handleAddItem}>Create Task</button>
            <button onClick={props.handleClearCompleted}>Clear Completed</button>
            </>
        )

}

export default TodoForm;