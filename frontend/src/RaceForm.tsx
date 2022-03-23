import { CloseButton } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { getDriver } from './http'
import { Form, Input, Label, Select, Wrapper } from './styles/Race.style'
import './styles/FormCard.css'



export function RaceForm(): JSX.Element {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data, e) => console.log(data, e)
    const onError = (errors, e) => console.log(errors, e)
    const history = useNavigate()
    
    const { data, isLoading } = useQuery('drivers', getDriver)

    if (isLoading) return <h3>Loading ...</h3>

    return (
        <Wrapper className='container-fluid'>
            <div className='form-container'>
                <Form onSubmit={handleSubmit(onSubmit, onError)}>
                    <CloseButton onClick={()=>history(-1)} variant='white'/>
                    <br/>
                    <Label htmlFor='racename'>Race name: </Label>
                    <Input id='racename' {...register('driver', { required: true })}></Input>
                    <Label htmlFor='driver'>Driver: </Label>
                    <Select id='dirver'>
                        {data?.map((driver) => (
                            <option key={driver.id}>{driver.name}</option>
                        ))}
                    </Select><br/>
                    <Label htmlFor='date'>Date: </Label>
                    <Input id='date' type="date" {...register('date', { required: true })}></Input>
                </Form> 
            </div>
        </Wrapper>
    )
}
