import React, { useState } from 'react'
import { useCookies } from 'react-cookie'
import { verifyClient } from '../Services/auth'


export const AuthContext = React.createContext()

export default function AuthProvider({children}){

    const [user, setUser] = useState()
    const [cookies, setCookie] = useCookies(['authToken']);

    const login = ( username, password) => {

        verifyClient(username, password)
            .then(token => {
                const toRecord = { Authorization: token }
                setCookie('authToken', toRecord)
                setUser(username)
            })
            .catch(console.error)
    }

    const value = {user, setUser, login}

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}