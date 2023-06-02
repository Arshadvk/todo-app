import { useEffect, useState } from "react";
import ToDo from "./components/ToDo";
import { addToDo, getAllTodo } from "./utils/HandleApi";

function App() {
  const [toDo , setToDo] = useState([])
  const [text ,setText] = useState('')
  useEffect(()=>{
    getAllTodo(setToDo)
  },[])
  return (
    <div className="App">
     <div className="container">
      <h1>Todo App</h1>
      <div className="top">
        <input type="text" 
        placeholder="Add ToDos..."
        value={text}
        onChange={(e)=>setText(e.target.value)} />
        <div className="add" onClick={()=>addToDo(text , setText , setToDo )}>Add</div>
      </div>
      <div className="list">
        {toDo.map((item)=> <ToDo key={item.id} text={item.text} />)}
      
      </div>
      </div> 
    </div>
  );
}

export default App;
