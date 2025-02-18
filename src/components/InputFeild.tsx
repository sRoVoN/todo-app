import React from "react";
import { GiClick } from "react-icons/gi";

interface InputFeildProps {
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>,
    handleAdd : (e: React.FormEvent, todo: string) => void;
}
const  InputFeild = ({todo, setTodo, handleAdd}: InputFeildProps) => {
  return (
    <>
    <form 
    className="flex flex-row "
    onSubmit={(e) => {
        handleAdd(e, todo); 
      }}
    >
    <input 
    placeholder='type todo ...' type='text' 
    className='w-full text-2xl text-gray-500 outline-none border-b border-teal-500 py-2 mb-2'
    value={todo}
    onChange={(e) => setTodo(e.target.value)}
     />
     <button
     className=" flex items-center justify-center cursor-pointer"
     >
      <GiClick size={20} color="#534ed0" className="hover:scale-120 hidden xl:flex" />
     </button>

    </form>
    </>
  )
}

export default InputFeild;