import { useState } from "react"
import { UserContext } from "./UserContext"

// const user = {
//     id: 123,
//     name: 'Cristian',
//     email: 'cristiancantero@google.com'
// }

export const UserProvider = ({ children }) => {
    
    const [user, setUser] = useState();

    return (
        // <UserContext.Provider value={{ hola: 'Mundo', user: user }}></UserContext.Provider>
        <UserContext.Provider value={{ user, setUser }}>
            { children }
        </UserContext.Provider>
    )
}
