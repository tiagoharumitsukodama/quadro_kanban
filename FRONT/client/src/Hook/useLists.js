import {useContext} from 'react'
import {ListContext} from '../Contexts/ListContext'

export function useLists(){
    return useContext(ListContext)
}