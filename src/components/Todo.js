import React from 'react';
import styled from 'styled-components';


const Item = styled.div`
    border: solid 2px black;
`

const Todo = props => {


        return (
            <Item className={props.item.completed ? 'completed' : ''} onClick={()=>{
                props.toggleCompleted(props.item.id)
            }}>
                <p>{props.todo}</p>
            </Item>
        );
}

export default Todo;