import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Layout from "./pages/Layout"
import Todos from "./pages/Todos"
import { UserContextProvider } from "./contexts/UserContextProvider"

function App() {

  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Login />}/>
            <Route path="todos" element={<Todos />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  )
}

export default App
