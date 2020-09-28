// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';
import styled from 'styled-components';

const List = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const TodoList = (props) => {


        return (
            <List>
                {props.state.listItems.map(item=>{
                    return (<Todo toggleCompleted={props.toggleCompleted} item={item} key={item.id} todo={item.task} />)
                })}
            </List>
        );
};

export default TodoList;