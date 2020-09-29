import React from 'react';
import styled from 'styled-components';

const Flexbox = styled.div`
    display: flex;
    justify-content: space-evenly;

     input, button {
         border: solid 2px black;
         margin: 1% auto;
     }
`

const TodoForm = (props) => {

        return (
            <>
            <Flexbox>
            <input onKeyPress={e=>{
                if (e.key === 'Enter') {
                    props.handleAddItem(e);
                }
            }} type='text' name='textInput' value={props.state.textInput} onChange={props.handleInputChange} placeholder='Enter a task!' />
            <button onClick={props.handleAddItem}>Create Task</button>
            <button onClick={props.handleClearCompleted}>Clear Completed</button>
            </Flexbox>
            <div>
                <input onKeyPress={e=>{
                if (e.key === 'Enter') {
                    props.handleSearchClick(e)
                }
            }} name='searchInput' type='text' value={props.state.searchInput} placeholder='Search for specific items'
                onChange={props.handleInputChange}/>
                <button onClick={props.handleSearchClick}>Search</button>
            </div>
            </>
        )

}

export default TodoForm;