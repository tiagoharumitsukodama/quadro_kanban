import React, { useState } from 'react'
import { Container, Button } from 'react-bootstrap';
import Card from './Card'
import {  PlusCircle } from 'react-bootstrap-icons';

import { useLists } from '../Hook/useLists'

export default function List({lista}){

    const { listCards, setListCards } = useLists()


    return (
        <Container className="d-flex flex-column align-items-center">
            <h3 className='text-center'>{lista}</h3>
            <div className='d-flex justify-content-center mb-4 mt-4'>
                <Button 
                    variant='outline-success'
                    size='sm'
                >
                    <PlusCircle />
                </Button>
            </div>
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
        </Container>
    );
}