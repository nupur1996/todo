import React, { Component } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'
import { Button,Card } from 'antd'

const column =[
        {
            title: 'TODO LIST',
            dataIndex:'TODO LIST',
            key: 'TODO LIST',
          } 
]

export default class TodoList extends Component {

    state = {
        todos :[],
        todoToShow:"all"
    };

    

    addTodo = todo=>{
        // const newTodos = [todo,...this.state.todos];

        this.setState({
            todos: [todo, ...this.state.todos]
        })
    }

    toggleComplete = (id) =>{
        this.setState({
            todos : this.state.todos.map(todo =>{
                if(todo.id === id){
                    //suppose to update
                  return{
                    ...todo,
                    complete :!todo.complete
                  } 
                }
                else{
                    return todo;
                }
            })
        })
    }

    updateTodoToShow = (s) =>{
        this.setState({todoToShow: s})
    }

    // handleDelete = (id) =>{
    //     this.setState({
    //         todos : this.state.todos.filter(todo => todo.id !== id)
    //     })
    // }

    removeCompletedTodos = (id) =>{
        this.setState({
            todos : this.state.todos.filter(todo => !todo.complete)
        })
    }
    
    render() {
        let todos = [];

        if(this.state.todoToShow === "all"){
            todos =  this.state.todos;
        }
        else if(this.state.todoToShow === "active"){
                todos = this.state.todos.filter(todo => !todo.complete)
        }
        else if(this.state.todoToShow === "complete"){
            todos = this.state.todos.filter(todo => todo.complete)
        }
        return (
            <div>
                <TodoForm onSubmit={this.addTodo}/><br/>
                <Card title="TODO LIST"  style={{ width: 600 }}>
                {todos.map(todo=>(
                    <Todo key={todo.id} 
                    toggleComplete={() => this.toggleComplete(todo.id)} 
                    text={todo.text}
                     onDelete = {() => this.handleDelete(todo.id)}
                    todo={todo}/>
                ))}
                </Card>
                <br/>
                {/* <table align="center">
                    <tr><th><h1>TODO LIST</h1></th></tr>
                    <tr> {todos.map(todo=>(
                    <Todo key={todo.id} 
                    toggleComplete={() => this.toggleComplete(todo.id)} 
                    text={todo.text}
                     onDelete = {() => this.handleDelete(todo.id)}
                    todo={todo}/>
                ))}<br/>
                </tr>
                </table> */}
                
                <div><br/>
                         
                <Button onClick={() => this.updateTodoToShow("all")} type="danger"> All </Button>&nbsp;&nbsp;&nbsp;
                <Button onClick={() => this.updateTodoToShow("active")} type="danger"> Active</Button>&nbsp;&nbsp;&nbsp; 
                <Button onClick={() => this.updateTodoToShow("complete")} type="danger"> Complete </Button>
                </div>
                  {this.state.todos.filter(todo=> todo.complete).length ?
                  (<div><br/>
                      <Button type="danger" onClick={this.removeCompletedTodos}>
                          Remove Completed Todos
                      </Button>
                  </div>): null}
                  <div>
                        Todo's left :{this.state.todos.filter(todo => !todo.complete).length}
                        </div>
          </div>  
        );
    }
}
