import React, { useState } from 'react'
import { Container, Button } from 'react-bootstrap';
import {  PlusCircle } from 'react-bootstrap-icons';
import Card from './Card'
import EmptyCard from './EmptyCard'
import { useLists } from '../Hook/useLists'

export default function List({lista}){

    const { listCards } = useLists()
    const [ creating, setCreating ] = useState(false)


    return (
        <Container className="d-flex flex-column align-items-center">
            <h3 className='text-center'>{lista}</h3>
            <div className='d-flex justify-content-center mb-4 mt-4'>
            {    
                creating ?
                <EmptyCard lista={lista} setCreating={setCreating}/>
                :
                <Button 
                    variant='outline-success'
                    size='sm'
                    onClick={() => setCreating(true)}
                >
                    <PlusCircle />
                </Button>
            } 
            </div>
            <div>
                {
                    listCards.map(card => {
                        if( card.lista === lista )
                            return (
                                <div key={card.id}>
                                    <Card 
                                        card={card}
                                    />
                                </div>
                            )
                        })
                }
            </div>
        </Container>
    );
}