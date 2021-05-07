import { Col, Container, Row } from 'react-bootstrap';
import List from './List'
import { useCookies } from 'react-cookie'
import { getAllCards } from '../Services/cards'
import { useEffect, useState } from 'react';
import { useLists } from '../Hook/useLists'



export default function Board(){

    const [cookies, setCookie, removeCookie] = useCookies(['authToken']);
    const { listCards, setListCards } = useLists()
    
    useEffect(() => {
        
        getAllCards(cookies)
            .then( list => setListCards(list) )
            .catch(console.error)
    },[])
	
    return (
        <Container className='flex-nowrap
                    justify-content-center mt-5'>
            <Row className='flex-nowrap
                    justify-content-center'>
                <Col>
                    <List lista={'ToDo'} />
                </Col>
                <Col>
                    <List lista={'Doing'}/>
                </Col>
                <Col>
                    <List lista={'Done'}/>
                </Col>
            </Row>
        </Container>
    );
}