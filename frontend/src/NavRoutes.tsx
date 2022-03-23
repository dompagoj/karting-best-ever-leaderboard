import { Navbar, Nav,  } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export function NavRoutes() {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand>BEST EVERY CARTING App</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link as={Link} to={'/'}>Home</Nav.Link>
                <Nav.Link as={Link} to={'/championships'}>Championships</Nav.Link>
            </Nav>
        </Navbar>
    )
}