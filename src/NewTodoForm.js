import React, { Component } from 'react'
import { v4 as uuid } from "uuid";
import "./NewTodoForm.css"

class NewTodoForm extends Component {
    constructor(props) {
        super();
        this.state = {task: ""};
    }
    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    handleSubmit = (evt) => {
        evt.preventDefault();
        const newTodo = {...this.state, id: uuid(), completed: false}
        this.props.createTodo(newTodo);
        this.setState({
            task: ""
        })
    }
    render() {
        return(
            <form className="NewTodoForm" onSubmit={this.handleSubmit}>
                <label htmlFor="task">New Todo</label>
                <input
                type="text"
                id="task" 
                placeholder="New Todo" 
                name="task" 
                value={this.state.task} 
                onChange={this.handleChange} />
                <button>Add Todo</button>
            </form>
        )
    }
}

export default NewTodoForm;