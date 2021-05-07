import React,{useRef, useState} from 'react'
import { Card, FormControl } from 'react-bootstrap'
import { CreateCardButton } from './ChangeStageButton'

export default function EmptyCard ({lista,setCreating}) {
    
    const [content, setContent] = useState();
    const [title, setTitle] = useState();
    const refTitulo = useRef()
    const refConteudo = useRef()

    return (
        <Card style={{ width: '16rem', backgroundColor: 'rgb(247, 247, 255)' }} 
                className='mb-3 shadow p-3 bg-body rounded'>
            <Card.Body>
                <div className='d-flex justify-content-between mb-3'>
                    <CreateCardButton 
                        lista={lista} 
                        conteudo={content}
                        titulo={title}
                        setCreating={setCreating}
                        />
                </div>
                <Card.Title>
                    <FormControl as="textarea" aria-label="With textarea" 
                        size='sm'
                        ref={refTitulo}
                        onChange={e => setTitle(e.target.value)}
                        value={title}
                        />  
                </Card.Title>
                <Card.Text style={{ minHeight: '4rem' }}>
                    <FormControl as="textarea" aria-label="With textarea" 
                        ref={refConteudo}
                        onChange={e => setContent(e.target.value)}
                        value={content}
                    />               
                </Card.Text>
            </Card.Body>
        </Card>
    )
}