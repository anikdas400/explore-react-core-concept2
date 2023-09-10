
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'


function App() {
  
  function handleClick (){
    alert ('first try react handleClick')
  }
// use arrow function
  const handleClick2 = () =>{
    alert ('second try react handleClick')
  }

  // use paramiter in arrow function
  const addToFour =(num) =>{
    alert(num + 5)
  }

  return (
    <>
      
      <h1>React core concept 2</h1>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>


      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>Click2</button>
      <button onClick={()=>{
        alert ('third try react handleClick')
      }}>third</button>

      <button onClick={()=>{addToFour(5)}}>Four</button>
      
    </>
  )
}

export default App
