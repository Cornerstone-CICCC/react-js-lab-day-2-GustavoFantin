import React, { createContext } from "react";

export type UserContextType = {
   fullname: string,
   setFullname: React.Dispatch<React.SetStateAction<string>>
   login: boolean,
   setLogin: React.Dispatch<React.SetStateAction<boolean>>
}

export const UserContext = createContext<UserContextType>({
   fullname: '',
   setFullname: () => {},
   login: false,
   setLogin: () => {}
}) 