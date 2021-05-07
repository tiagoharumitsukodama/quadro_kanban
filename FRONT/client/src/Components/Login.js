import React, {useRef} from 'react'
import { Container, Form, Button } from 'react-bootstrap';
import { useAuth } from '../Hook/useAuth'


export default function Login(){

    const refUsername = useRef()
    const refPassword = useRef()
    const {login} = useAuth()


    const handleSubmit = async (e) => {

        e.preventDefault()
        
        await login(
            refUsername.current.value, 
            refPassword.current.value
        )
    }

    return (
        <Container className='mt-5 d-flex flex-column bd-highlight mb-3
        align-items-center
            '>
                <h2>Login</h2>
                <Form className='mt-3 d-flex flex-column bd-highlight mb-3
        align-items-center
            '>
                    <Form.Group controlId="formBasicEmail">
                    <Form.Label>Usuário</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Dogite seu nome" 
                        ref={refUsername}
                    />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Digite o código" 
                        ref={refPassword}
                    />
                    </Form.Group>
                    <Button
                        variant="primary" 
                        type="submit"
                        className='mt-4'
                        onClick={handleSubmit}
                    >
                    Pronto
                    </Button>
                </Form>
        </Container>
    );
}