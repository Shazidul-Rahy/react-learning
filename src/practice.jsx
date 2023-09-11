import View from "./view"

import { useEffect, useState } from "react"

export default function Todos() {
    const [todoList, setTodo] = useState([])
        useEffect(()=>{
            fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(data => setTodo(data))

        }, [])
        
    return(
        <div>
                <h3>Todo List: {todoList.length}</h3>
                {
                    todoList.map(n=><View info={n}></View>)
                }
        </div>
    )
}