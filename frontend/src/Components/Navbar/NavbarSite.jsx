import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/Logo.png'
import '../../Styles/navbar.css'

const NavBootSite = () => {
    return (
        <>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand>
                        <img src={Logo} alt="My logo" />
                        Groupomania
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/accueil">
                            Accueil
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/profile">
                            Profil
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/login">
                            Déconnexion
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBootSite
