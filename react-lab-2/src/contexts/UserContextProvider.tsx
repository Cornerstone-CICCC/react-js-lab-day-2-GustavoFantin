import { useState, type ReactNode } from 'react'
import { UserContext } from './UserContext'

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [fullname, setFullname] = useState<string>('')
  const [login, setLogin] = useState<boolean>(false)

  return (
    <UserContext.Provider value={{ fullname, setFullname, login, setLogin }}>
      {children}
    </UserContext.Provider>
  )
}
