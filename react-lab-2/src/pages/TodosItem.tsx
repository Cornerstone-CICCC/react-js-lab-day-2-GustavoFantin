import type { ITask } from "../types/Task.type"

type Props = {
   onComplete: (id: string) => void,
   onDelete: (id: string) => void,
   todo: ITask
}

const TodosItem = ({ onComplete, onDelete, todo }: Props) => {
  return (
    <>
      <span className={
         todo.completed ?
          "text-green-500 mx-3 text-center line-through" :
          "text-red-500 mx-3 text-center"
         }>{todo.task}</span>
      <button  className="bg-gray-800 text-white rounded-md hover:bg-gray-600 hover:text-black py-2 px-3 transition-colors mx-3" onClick={() => onComplete(todo.id)}>Mark {todo.completed ? "Uncompleted" : "Completed"}</button>
      <button  className="bg-red-500 text-white rounded-md hover:bg-gray-600 hover:text-black py-2 px-3 transition-colors mx-3" onClick={() => onDelete(todo.id)}>Delete</button>
    </>
  )
}

export default TodosItem