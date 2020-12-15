import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from "./Todo";
import "./TodoList.css"


class TodoList extends Component {
    constructor(props){
        super();
        this.state = {todos: []};
    }
    create = (newTodo) => {
        this.setState({
            todos: [...this.state.todos, newTodo]
        })
    }
    remove = (id) => {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        })
    }
    update = (id, updatedTask) => {
        const updatedTodos = this.state.todos.map(todo => {
            if(todo.id === id) {
                return {...todo, task: updatedTask}
            }
            return todo
        });
        this.setState({
            todos: updatedTodos
        })
    }
    toggleCompletion = (id) => {
        const updatedTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed }
            }
            return todo
        });
        this.setState({
            todos: updatedTodos
        })
    }
    render() {
    const todo = this.state.todos.map( todo => <Todo 
        key={todo.id} 
        id={todo.id} 
        task={todo.task} 
        completed={todo.completed} 
        toggleComplete={this.toggleCompletion}
        removeTodo={this.remove} 
        updateTodo={this.update} />)
        return (
            <div className="todoList">
                <h1>Todo List</h1>
                <ul>
                    {todo}
                </ul>
                <NewTodoForm createTodo={this.create}/>
            </div>
        )
    }
}

export default TodoList;