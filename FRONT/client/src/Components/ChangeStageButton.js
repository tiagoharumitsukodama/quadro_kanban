import { 
    ArrowRightCircle,
    ArrowLeftCircle,
    X,
    PencilSquare
    
} from 'react-bootstrap-icons';

import { nextStage, backStage } from '../Utils/stageCard'
import { Button } from 'react-bootstrap'

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

export function CloseButton({lista}){
    return (
        <Button size="sm" variant="outline-danger">
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