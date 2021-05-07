import { Card } from 'react-bootstrap'

export default function NewCard(){
    const titulo = 'ok'
    const conteudo = 'fdafa'

    return(
        <Card style={{ width: '16rem', backgroundColor: 'rgb(247, 247, 255)' }} 
                className='mb-3 shadow p-3 bg-body rounded'>
        <Card.Body>
            <div className='d-flex justify-content-between mb-3'>
                <p>Opa</p>
            </div>
            <Card.Title>{titulo}</Card.Title>
            <Card.Text style={{ minHeight: '4rem' }}>
            {
                conteudo
            }            
            </Card.Text>
            <div className='d-flex justify-content-between'>
                <p>Meu</p>
            </div>
        </Card.Body>
        </Card>
    );
}