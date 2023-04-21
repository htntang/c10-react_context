import { Children, createContext, useState } from 'react'

export const UserContext = createContext('default context')

export default function UserContextProvider({children}){
    const [user,setUser] = useState('ChristTest')

    return<UserContext.Provider value={{user,setUser}}>
        {children}
    </UserContext.Provider>
}