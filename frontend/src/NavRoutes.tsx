// import { Navbar, Nav,  } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {  Box, Breadcrumbs } from '@mantine/core'

export function NavRoutes() {
    return (
    // <Navbar bg="dark" variant="dark">
    //     <Navbar.Brand>BEST EVERY CARTING App</Navbar.Brand>
    //     <Nav className="me-auto">
    //         <Nav.Link as={Link} to={'/'}>Home</Nav.Link>
    //         <Nav.Link as={Link} to={'/championships'}>Championships</Nav.Link>
    //     </Nav>
    // </Navbar>

        <Box>
            <Breadcrumbs
                separator='/'
                sx={(theme)=>({
                    backgroundColor: theme.colors.indigo[2],
                    padding: 20,
                    fontFamily: 'sans-serif',
                    fontSize: '23px',
                    textDecoration: 'none'
                })}>
                <Link to={'/'}>Home </Link>
                <Link to={'/championships'}>Championships</Link>
            </Breadcrumbs>
        </Box>

    )
}