import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import { getChampionships } from './http'
import { Wrapper } from './styles/Race.style'

export const Championships = () => {
    const { data, isLoading, error } = useQuery('championships', getChampionships)

    if (isLoading) return <h3>Loading...</h3>
    
    console.log(data)
    console.log(error)

    return (
        <Wrapper>
            <ul>
                {data?.map((championship) => (
                    <li key={championship.id}><Link to={`/championship/${championship.id}`}>{championship.name}</Link></li>
                ))}
            </ul>
        </Wrapper>
    )
}