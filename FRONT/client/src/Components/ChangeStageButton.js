import { 
    ArrowRightCircle,
    ArrowLeftCircle,
    X,
    PencilSquare,
    Save
    
} from 'react-bootstrap-icons';

import { nextStage, backStage } from '../Utils/stageCard'
import { Button } from 'react-bootstrap'
import { deleteCard, editCard, getAllCards } from '../Services/cards'
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

export function EditButton({mode, setMode, lista}){

    const handleEditButton = async () => {

        const DISPLAY_MODE = 'display';
        const EDIT_MODE = 'edit';

        if(mode === DISPLAY_MODE) setMode(EDIT_MODE)
        else setMode(DISPLAY_MODE)
    }
    return (
        <Button 
            size='sm' 
            variant="outline-info" 
            disabled={nextStage(lista)==null}
            onClick={handleEditButton}
            >
            <PencilSquare />
        </Button>
    );
}

export function SaveButton({card, titulo='', conteudo='', lista='', setMode}){

    if(titulo) card.titulo = titulo
    if(conteudo) card.conteudo = conteudo
    if(lista) card.lista = lista

    const [cookies, removeCookie] = useCookies(['authToken']);
    const { setListCards } = useLists()
    const {setUser} = useAuth()

    const handleSaveButton = async (setMode) => {
        try {
            await editCard(card, cookies)
            const list = await getAllCards(cookies)
            setListCards(list)
            setMode('display')
            
        } catch (error) {
            alert(error.message)
            setUser(null)
            removeCookie('authToken')
        }
    }
    return (
        <Button 
            size='sm' 
            variant="outline-info" 
            onClick={() => handleSaveButton(setMode)}
            >
            <Save />
        </Button>
    );
}