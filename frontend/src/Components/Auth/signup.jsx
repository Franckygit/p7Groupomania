import React from 'react'

import '../../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import NavBootSignup from '../Navbar/NavbarSignup'

function SignUp() {
    return (
        <>
            <NavBootSignup />
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
                    S'inscrire
                </Button>
            </Form>
        </>
    )
}

export default SignUp
