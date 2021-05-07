import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { 
        ArrowRightCircle,
        ArrowLeftCircle,
        X,
        PencilSquare
        
} from 'react-bootstrap-icons';


export default function ({titulo, conteudo, lista}) {


    return(
        <Card style={{ width: '16rem', backgroundColor: 'rgb(247, 247, 255)' }} 
                className='mb-3 shadow p-3 bg-body rounded'>
        <Card.Body>
            <div className='d-flex justify-content-between mb-3'>
                <Button size='sm' variant="outline-info" disabled={lista=='Done'}>
                    <PencilSquare />
                </Button>
                <Button size="sm" variant="outline-danger">
                    <X />
                </Button>
            </div>
            <Card.Title>{titulo}</Card.Title>
            <Card.Text style={{ minHeight: '4rem' }}>
            {
                conteudo
            }            
            </Card.Text>
            <div className='d-flex justify-content-between'>

                <Button size="sm" variant="outline-info" disabled={lista=='ToDo'}>
                    <ArrowLeftCircle />
                </Button>
                <Button size="sm" variant="outline-info" disabled={lista=='Done'}>
                    <ArrowRightCircle />
                </Button>
            </div>
        </Card.Body>
        </Card>
    );
}