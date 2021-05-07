import { Col, Container, Row } from 'react-bootstrap';
import List from './List'
import { useCookies } from 'react-cookie'
import { getAllCards } from '../Services/cards'
import { useEffect } from 'react';
import { useLists } from '../Hook/useLists'
import { useAuth } from '../Hook/useAuth';


export default function Board(){

    const [cookies] = useCookies(['authToken']);
    const { setListCards } = useLists()
    const {setUser} = useAuth()
    
    useEffect(() => {
        
        let gotCards = false

        getAllCards(cookies)
            .then( list => {

                if(!gotCards)
                    setListCards(list) 
            })
            .catch( error => {
                alert(error.message)
                setUser(null)
            })

        return () => gotCards=true
        
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