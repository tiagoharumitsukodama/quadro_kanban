import React, {useState} from 'react'

export const ListContext = React.createContext()

export default function ListProvider({children}) {

    const [listCards, setListCards] = useState([])

    const value = {
        listCards, 
        setListCards,
    }

    return (
        <ListContext.Provider value={value}>
            {children}
        </ListContext.Provider>
    );
}