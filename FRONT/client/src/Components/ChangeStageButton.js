import { 
    ArrowRightCircle,
    ArrowLeftCircle,
    X,
    PencilSquare
    
} from 'react-bootstrap-icons';

import { nextStage, backStage } from '../Utils/stageCard'
import { Button } from 'react-bootstrap'
import { deleteCard, getAllCards } from '../Services/cards'
import { useCookies } from 'react-cookie'
import { useLists } from '../Hook/useLists'
import { useAuth } from '../Hook/useAuth';


export function NextButton({lista}){
    return (
        <Button size="sm" variant="outline-info" disabled={nextStage(lista)== null}>
            <ArrowRightCircle />
        </Button>
    );
}

export function BackButton({lista}){
    return (
        <Button size="sm" variant="outline-info" disabled={backStage(lista)== null}>
            <ArrowLeftCircle />
        </Button>
    );
}

export function CloseButton({card}){

    const [cookies, removeCookie] = useCookies(['authToken']);
    const { setListCards } = useLists()
    const {setUser} = useAuth()

    const handleCloseButton = async () => {
        try {
            await deleteCard(card, cookies)
            const list = await getAllCards(cookies)
            setListCards(list)
            
        } catch (error) {
            alert(error.message)
            setUser(null)
            removeCookie('authToken')
        }
    }

    return (
        <Button 
            size="sm" 
            variant="outline-danger"
            onClick={handleCloseButton}
        >
            <X />
        </Button>
    );
}

export function EditButton({lista}){
    return (
        <Button size='sm' variant="outline-info" disabled={nextStage(lista)==null}>
            <PencilSquare />
        </Button>
    );
}