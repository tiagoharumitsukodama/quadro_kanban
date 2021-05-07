import React,{useRef, useState} from 'react'
import { Button, Card, FormControl } from 'react-bootstrap';

import {
    NextButton, 
    BackButton,
    CloseButton,
    EditButton
} from './ChangeStageButton'


export default function CardModel({card}) {

    const DISPLAY_MODE = 'display';
    const EDIT_MODE = 'edit';
    const [mode, setMode] = useState(DISPLAY_MODE);
    const [content, setContent] = useState(card.conteudo);
    const [title, setTitle] = useState(card.titulo);


    const DisplayMode = (titulo, conteudo) => {
        return(
            <Card style={{ width: '16rem', backgroundColor: 'rgb(247, 247, 255)' }} 
                    className='mb-3 shadow p-3 bg-body rounded'>
            <Card.Body>
                <div className='d-flex justify-content-between mb-3'>
                    <EditButton mode={mode} setMode={setMode} lista={card.lista}/>
                    <CloseButton card={card}/>
                </div>
                <Card.Title>
                {
                    titulo
                }
                </Card.Title>
                <Card.Text style={{ minHeight: '4rem' }}>
                {
                    conteudo
                }          
                </Card.Text>
                <div className='d-flex justify-content-between'>
                    <BackButton lista={card.lista}/>
                    <NextButton lista={card.lista}/>
                </div>
            </Card.Body>
            </Card>
        );
    }
    
    const refTitulo = useRef()
    const refConteudo = useRef()
    const EditMode = (titulo, conteudo) => {


        return (
            <Card style={{ width: '16rem', backgroundColor: 'rgb(247, 247, 255)' }} 
                    className='mb-3 shadow p-3 bg-body rounded'>
            <Card.Body>
                <div className='d-flex justify-content-between mb-3'>
                    <EditButton mode={mode} setMode={setMode} lista={card.lista}/>
                    <CloseButton card={card}/>
                </div>
                <Card.Title>
                    <FormControl as="textarea" aria-label="With textarea" 
                        size='sm'
                        ref={refTitulo}
                        onChange={e => setTitle(e.target.value)}
                        value={titulo}
                        />  
                </Card.Title>
                <Card.Text style={{ minHeight: '4rem' }}>
                    <FormControl as="textarea" aria-label="With textarea" 
                        ref={refConteudo}
                        onChange={e => setContent(e.target.value)}
                        value={conteudo}
                    />               
                </Card.Text>
                <div className='d-flex justify-content-between'>
                    <BackButton lista={card.lista}/>
                    <NextButton lista={card.lista}/>
                </div>
            </Card.Body>
            </Card>
        );
    }


    return (
        <>
            {mode === DISPLAY_MODE ? DisplayMode(title, content) : EditMode(title, content)}
        </>
    );

}








     
