import React from 'react';
import styled from 'styled-components';


const Todo = props => {


        return (
            <div className={props.item.completed ? 'completed' : ''} onClick={()=>{
                props.toggleCompleted(props.item.id)
            }}>
                <p>{props.todo}</p>
            </div>
        );
}

export default Todo;