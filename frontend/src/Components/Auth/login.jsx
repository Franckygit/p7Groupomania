import React from 'react'

import '../../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import NavBootLogin from '../Navbar/Navbar'

function LogIn() {
    return (
        <>
            <NavBootLogin />
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Adresse Mail</Form.Label>
                    <Form.Control type="email" placeholder="e-Mail" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Mot de Passe</Form.Label>
                    <Form.Control type="password" placeholder="Mot de passe" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Se connecter
                </Button>
            </Form>
        </>
    )
}

export default LogIn
