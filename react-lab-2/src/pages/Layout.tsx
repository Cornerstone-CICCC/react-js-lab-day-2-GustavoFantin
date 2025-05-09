import { Toaster } from "react-hot-toast"
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
   <>
   <div><Toaster /></div>
    <main className="bg-linear-to-br from-black to-gray-800 h-screen w-screen flex m-auto justify-center align-center">
      <Outlet />
    </main>
   </>
  )
}

export default Layout