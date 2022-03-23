import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ChampionshipDetails } from './ChampionshipDetails'
import { Championships } from './Championships'
import { RaceForm } from './RaceForm'
import { Home } from './Home'
import { NavRoutes } from './NavRoutes'


export function MainRouter() {
    return (
        
        <Router>
            <NavRoutes/>
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