import React from 'react'
import axios from 'axios'

import '../../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { service } from '../Services/service'

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import NavBootLogin from '../Navbar/Navbar'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LogIn = (req, res) => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        axios
            .post('http://localhost:3000/api/auth/login', {
                email: email,
                password: password,
            })
            .then((res) => {
                console.log(res)
                navigate('/accueil')
                service.saveToken(res.data.token)
                console.log('Connecté')
            })
            .catch((err) => console.log(err))
    }

    return (
        <>
            <NavBootLogin />
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
                    Se connecter
                </Button>
            </Form>
        </>
    )
}

export default LogIn
