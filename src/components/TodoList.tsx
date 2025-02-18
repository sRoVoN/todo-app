import { Todo } from "../model"
import ToDos from "./ToDos"
import { GiCheckMark } from "react-icons/gi";
import { GoDash } from "react-icons/go";

interface TodoListProps{
    todos: Todo[],
    handleDelete: (id: number) => void,
    handleCheck: (id: number) => void,
    chechedTodos: Todo[],

}
const TodoList = ({todos, handleDelete, handleCheck, chechedTodos}: TodoListProps) => {
  return (
    <div className="flex flex-col md:flex-row">
    <div className="flex flex-col">
      <ToDos todos={todos} handleDelete={handleDelete} handleCheck={handleCheck} />    
    </div>
    <div>
      {
        chechedTodos.length > 0 && chechedTodos.map((todo, index) => (
          <div key={index}>
                <div key={index} className="flex flex-row justify-between items-center checked-button ">
                    <h3 >{todo.todo}</h3>
                    <div className="flex flex-row ml-3">
                    <div className="button-delete" onClick={() => handleCheck(todo.id)}>
                      {
                        todo.isDone ? <GiCheckMark size={20} color="green"  /> : <GoDash />
                      }
            
                    </div>   
                    </div>
                </div>
          </div>
        ))
      }
    </div>
    </div>
  )
}

export default TodoList