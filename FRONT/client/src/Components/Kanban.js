import { useAuth } from '../Hook/useAuth'
import Login from './Login'
import Board from './Board'
import ListProvider from '../Contexts/ListContext'


export default function Kanban(){

    const {user} = useAuth()

    return (
        <div>
            {
                user ? 
                
                <ListProvider><Board /></ListProvider>
                
                : <Login />
            }
        </div>
    );
}