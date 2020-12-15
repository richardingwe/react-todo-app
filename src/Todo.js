import React, { Component } from 'react'
import "./Todo.css"

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            task: this.props.task
        }
    }
    handleRemove = (evt) => {
        this.props.removeTodo(this.props.id)
    }
    toggleForm = () => {
        this.setState({
            isEditing: !this.state.isEditing
        })
    }
    handleUpdate = (evt) => {
        evt.preventDefault();
        this.props.updateTodo(this.props.id, this.state.task);
        this.setState({
            isEditing: false
        })

    }
    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    handleComplete = () => {
        this.props.toggleComplete(this.props.id);
    }
    render() {
        let result;
        if(this.state.isEditing) {
            result = (
                <div className="todo">
                    <form className="todo-edit-form" onSubmit={this.handleUpdate}>
                        <input type="text" value={this.state.task} name="task" onChange={this.handleChange}/>
                        <button>Save</button>
                    </form>
                </div>
            )
        } else {
            result = (
                <div className="todo">
                    <li className={this.props.completed ? "todo-task completed" : "todo-task"} onClick={this.handleComplete}>{this.props.task}</li>
                    <div className="todo-buttons">
                        <button onClick={this.toggleForm}><i className="fas fa-pen" /></button>
                        <button onClick={this.handleRemove}><i className="fas fa-trash" /></button>
                    </div>
                </div>
            )
        }
        return result;
    }
}

export default Todo;