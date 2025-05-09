import { Link } from "react-router-dom"
import { useUser } from "../contexts/useUser"
import { useState, type FormEvent } from "react"
import type { ITask } from "../types/Task.type"
import { v4 } from "uuid"
import toast from "react-hot-toast"
import TodosItem from "./TodosItem"


const Todos = () => {
   const {fullname, login, setLogin } = useUser()
   const [task, setTask] = useState<ITask[]>([])
   const [taskInput, setTaskInput] = useState<string>("")
   
   const handleAddTask = (task: string) => {
      setTask(prev => {
         const newTask = {
            id: v4(),
            task,
            completed: false
         }
         return [...prev, newTask]
      })
   }

   const handleCompleteTask = (id: string) => {
      setTask(prev => 
         prev.map(task => 
            task.id === id ? { ...task, completed: !task.completed }
            : task
         )
      )
      toast.success("To Do updated successfully!")
   }

   const handleDeleteTask = (id: string) => {
      setTask(prev => 
         prev.filter(task => task.id !== id)
      )
      toast.error("To Do deleted successfully!")
   }

   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      handleAddTask(taskInput)
      setTaskInput('')
   } 

  return (
    <>
      {login ? (
         <div className="bg-gray-700 align-middle flex flex-col m-auto justify-center align-center p-6 rounded-md">
            <div className="flex justify-between">
               <h2 className="text-xl text-white mb-4">Welcome, {fullname}!</h2>
               <button onClick={() => {
                  setLogin(false)
                  toast.success("Logout successfully!")
                  }} className="bg-gray-800 text-white rounded-md hover:bg-white hover:text-black py-2 px-3 transition-colors">Log Out</button>
            </div>
            
            <h3 className="text-md text-white mb-4">Have a super nice and fancy day!</h3>
            {task.map(t => (
               <div key={t.id} className="bg-gray-300 px-4 py-2 m-2 flex justify-between items-center gap-5">
                  <TodosItem key={t.id} todo={t} onComplete={handleCompleteTask} onDelete={handleDeleteTask}/>
               </div>
            ))}
            <form onSubmit={handleSubmit}>
            <div className="flex">                 
               <input type="text" placeholder="Enter new task" value={taskInput} onChange={(e) => setTaskInput(e.target.value)} className="bg-gray-800 text-white border-white mr-4 p-2 rounded-sm w-full h-auto"/>
               <button className="bg-gray-800 text-white rounded-md hover:bg-white hover:text-black py-2 px-3 transition-colors">Add Task</button>
            </div>
            </form>
         </div>
      ) : (
         <div className="bg-gray-700 align-middle flex flex-col m-auto justify-center align-center p-6 rounded-md">
            <h2 className="text-xl text-white mb-4">To Add todos, please login in the previous page.</h2>
            <Link to={'/'} className="text-white underline hover:text-blue-500">Go back</Link>
         </div>
      )}
    </>
  )
}

export default Todos