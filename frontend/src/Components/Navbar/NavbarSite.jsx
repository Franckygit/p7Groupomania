import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/Logo.png'
import '../../Styles/navbar.css'
import { service } from '../Services/service'
import { useNavigate } from 'react-router-dom'

const NavBootSite = () => {
    let navigate = useNavigate()
    const logout = () => {
        service.logout()
        navigate('/')
    }
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
                        <Nav.Link onClick={logout}>Déconnexion</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBootSite
