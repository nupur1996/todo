import React, { Component } from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import { Layout,Row,Col } from 'antd';
import './App.css'



export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Row style={{padding:50}}>
          <Col span={8} offset={8}>
            <h1>TODO INPUT</h1>
          <TodoList/>
          </Col>
        </Row>
       
      </div>
    )
  }
}
