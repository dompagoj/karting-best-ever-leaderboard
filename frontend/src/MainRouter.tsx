import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { ChampionshipDetails } from './ChampionshipDetails'
import { Championships } from './Championships'
import { Navbar, Nav } from 'react-bootstrap'
import { RaceForm } from './RaceForm'
import { Home } from './Home'


export function MainRouter() {
    return (
        
        <Router>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>BEST EVERY DADDY CARTING</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to={'/'}>Home</Nav.Link>
                    <Nav.Link as={Link} to={'/championships'}>Championships</Nav.Link>
                </Nav>
            </Navbar>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/championships' element={<Championships/>}/>
                <Route path='/championship/:id' element={<ChampionshipDetails/>}/>
                <Route path='/championship/:id' element={<ChampionshipDetails/>}/>
                <Route path='/addrace' element={<RaceForm/>}/>
            </Routes>
        </Router>
        
    )
}