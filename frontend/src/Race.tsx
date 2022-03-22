import { useState } from 'react'
import { Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Wrapper } from './styles/Race.style'

export function AddRace(): JSX.Element {
    const [ openForm, setOpenForm  ] = useState(false)  

    const toggleForm =  ()=> {
        setOpenForm(!openForm)
    }
    
    return (
        <Wrapper className='container-fluid'>
            <Link to={'/addrace'}><Button type='button' onClick={toggleForm}>Add Race</Button></Link>
        </Wrapper>
    )
}
