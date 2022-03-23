import { Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Wrapper } from './styles/Race.style'

export function AddRace(): JSX.Element {

    return (
        <Wrapper className='container-fluid'>
            <Link to={'/addrace'}><Button type='button' >Add Race</Button></Link>
        </Wrapper>
    )
}
