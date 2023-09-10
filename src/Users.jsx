import { useEffect, useState } from "react"
import User from "./User"

export default function Users (){

    const[users,setUsers] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data =>setUsers(data))
    },[])
    return(
        <div>
            <h2>Users:{users.length}</h2>
        {
            users.map(user=><User useri={user}></User> )
        }
        </div>
    )
}

// 1. create component and connect App.jsx
// 2. declare a state to hold the data
// 3. use userEffect with callback function and dependency array
// 4. use fetch to load data in userEffect
// 5. set loaded data to the state
// 6. display data on the componont