import { useState } from "react"

export default function Team (){
    const [team,setTeam] = useState(11)
    const handleAdd =()=>{
        const newTeam = team + 1;
        setTeam(newTeam);

    }
    const handleRemove =()=>{
        const newTeam = team - 1;
        setTeam(newTeam);

    }
    
    return(
        <div style={{border:'2px solid purple',borderRadius:'15px', padding:'15px'}}>
            <h3>players: {team} </h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}