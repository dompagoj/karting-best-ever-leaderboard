import { Button } from '@mantine/core'
import { Link } from 'react-router-dom'
import { Wrapper } from './styles/Race.style'

export function AddRace(): JSX.Element {

    return (
        <Wrapper className='container-fluid'>
            <Link to={'/addrace'}><Button color="gray" size='md' radius="md" uppercase>Add Race</Button></Link>
        </Wrapper>
    )
}
