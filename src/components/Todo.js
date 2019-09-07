import React from 'react'
import { Button,Icon } from 'antd'

export default props => (
    <div>
    <div style={{
        textDecoration: props.todo.complete ? "line-through" : ""
    }}  
    onClick={props.toggleComplete}>{props.todo.text}</div>
    </div>
)