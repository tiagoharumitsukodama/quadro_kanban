import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { 
        ArrowRightCircle,
        ArrowLeftCircle,
        X,
        PencilSquare
        
} from 'react-bootstrap-icons';
import {
    NextButton, 
    BackButton,
    CloseButton,
    EditButton
} from './ChangeStageButton'


export default function ({titulo, conteudo, lista}) {


    return(
        <Card style={{ width: '16rem', backgroundColor: 'rgb(247, 247, 255)' }} 
                className='mb-3 shadow p-3 bg-body rounded'>
        <Card.Body>
            <div className='d-flex justify-content-between mb-3'>
                <EditButton />
                <CloseButton />
            </div>
            <Card.Title>{titulo}</Card.Title>
            <Card.Text style={{ minHeight: '4rem' }}>
            {
                conteudo
            }            
            </Card.Text>
            <div className='d-flex justify-content-between'>
                <BackButton lista={lista}/>
                <NextButton lista={lista}/>
            </div>
        </Card.Body>
        </Card>
    );
}