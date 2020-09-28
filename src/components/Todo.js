import React from 'react';

class Todo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={this.props.item.completed ? 'completed' : ''} onClick={()=>{
                this.props.toggleCompleted(this.props.item.id)
            }}>
                <p>{this.props.todo}</p>
            </div>
        )
    }
}

export default Todo;