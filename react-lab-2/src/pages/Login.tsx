import { useState, type FormEvent } from "react"
import { useUser } from "../contexts/useUser"
import { Link, useNavigate } from "react-router-dom"


const Login = () => {
   const {fullname, setFullname, login, setLogin} = useUser()
   const [username] = useState<string>(  )
   const navigate = useNavigate()

   const handleLoginSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      setLogin(true)
      navigate('todos')
   }

  return (
    <div className="bg-gray-700 align-middle flex flex-col m-auto justify-center align-center p-6 rounded-md">
      <h2 className="text-xl text-white mb-4">Hi, what's your name ?</h2>
      <div>

         <form onSubmit={handleLoginSubmit}>
         <input type="text" placeholder="Your Name" value={username} onChange={e => setFullname(e.target.value)}  className="bg-gray-800 text-white border-white mr-4 p-2 rounded-sm"/>

         {fullname ? (
            <button className="bg-gray-800 text-white rounded-md hover:bg-white hover:text-black py-2 px-3 transition-colors">
            <Link to={"/todos"}>Login</Link>
         </button>
         ) : '' 
         }
         </form>


      </div>
    </div>
  )
}

export default Login