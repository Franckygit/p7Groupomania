import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { NavLink } from 'react-router-dom'

function NavBootHome() {
    return (
        <>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand to="#home">Groupomania</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="signup">
                            S'inscrire
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="login">
                            Connexion
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBootHome
