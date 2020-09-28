import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './components/Todo.css';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      textInput: '',
      listItems: [],
    }
  }

  handleInputChange = e => {
    this.setState({
      textInput: e.target.value
    })
  }

  handleAddItem = e => {
    e.preventDefault();
    this.setState({
    listItems: [...this.state.listItems, {task: this.state.textInput, id: Date.now(), completed: false}],
    textInput: '',
    });
  }

  handleClearCompleted = e => {
    e.preventDefault();
    this.setState({
      listItems: this.state.listItems.filter(item=>{
        return !item.completed
      })
    })
  }

  toggleCompleted = id => {
    this.setState({
      listItems: this.state.listItems.map(item=>{
        if (item.id === id) {
          return {...item, completed: !item.completed}
        } else {
          return item;
        }
      })
    })
  }

  render() {
    return (
      <div style={{textAlign:'center'}}>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm state={this.state} handleInputChange={this.handleInputChange} handleAddItem = {this.handleAddItem} handleClearCompleted={this.handleClearCompleted} />
        <TodoList state={this.state} handleInputChange={this.handleInputChange} toggleCompleted={this.toggleCompleted} />
      </div>
    );
  }
}

export default App;
