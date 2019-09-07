import React, { Component } from 'react'
import { Input,Button } from 'antd';
import shortid from 'shortid';


export default class TodoForm extends Component {
    state={
        text:''
    }

    handleChange = (e)=>{
        this.setState({
        [e.target.name] : e.target.value 
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit({
                id:shortid.generate(),
                text: this.state.text,
                complete:false
        });
        this.setState({
            text:''
        })
      

    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                     <div>
                        <Input 
                             name="text"
                        value={this.state.text}
                        onChange={this.handleChange}
                        placeholder="todos....."/>
                     </div><br/>
                     <Button type="danger" onClick = {this.handleSubmit}>Add</Button>
            </form>
           
        )
    }
}
