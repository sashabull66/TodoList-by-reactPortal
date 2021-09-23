import React from "react";
import {TodoItem} from "./TodoItem";

export const TodoList = (/*{todos}*/) => {
    let [todos, setTodos] = React.useState(
        [
            {title: 'Сходить в магазин', id: '1'},
            {title: 'Сходить в поликлинику', id: '2'},
            {title: 'Сходить в автосервис', id: '3'},
            {title: 'Сходить в садик', id: '4'},
        ]
    )
    const delTodo = (id) => {
setTodos((prev)=>{return prev.filter(todo=>todo.id !== id)})
    }
    return (
        <div>
            {todos.length === 0 ? <h4 style={{textAlign: 'center'}}>Нету задач</h4> :
                <ul className="collection">
                    {todos.map(todo => <TodoItem key={todo.id} title={todo.title} del={()=>{delTodo(todo.id)}}/>)}
                </ul>}
        </div>
    )
}