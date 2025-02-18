import { Todo } from "../model"
import { MdDeleteForever } from "react-icons/md";
import { GiCheckMark } from "react-icons/gi";
import { GoDash } from "react-icons/go";
interface TodosProps{
todos: Todo[],
handleDelete: (id: number) => void,
handleCheck: (id: number) => void,
}

function ToDos({ todos, handleCheck, handleDelete}: TodosProps) {
    const notChecked = todos.filter((todo) => !todo.isDone);
  return (
    <>
        {
   notChecked.map((todo,index) => (
    <div key={index} className="flex flex-row justify-between items-center todo-button">
        <h3 >{todo.todo}</h3>
        <div className="flex flex-row ml-3">
        <div className="button-delete" onClick={() => handleDelete(todo.id)}>
        <MdDeleteForever size={20} color="red" />
        </div>
        <div className="button-delete" onClick={() => handleCheck(todo.id)}>
          {
            todo.isDone ? <GiCheckMark size={20}  /> : <GoDash />
          }

        </div>   
        </div>
    </div>
   ))
    }  
    </>
  )
}

export default ToDos