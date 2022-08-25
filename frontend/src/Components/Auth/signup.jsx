import React from 'react'
import axios from 'axios'

import '../../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import NavBootSignup from '../Navbar/NavbarSignup'
import { useState } from 'react'
//import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    //let navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        axios
            .post('http://localhost:3000/api/auth/signup', email, password)
            .then((res) => {
                //navigate('/home')
                console.log(res)
            })
            .catch((err) => console.log(err))
        //console.log('Connecté sur le compte associé à :' + mail)
    }
    return (
        <>
            <NavBootSignup />
            <Form onSubmit={onSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Adresse Mail</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        placeholder="e-Mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Mot de Passe</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        placeholder="Mot de passe"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    S'inscrire
                </Button>
            </Form>
        </>
    )
}

export default SignUp
