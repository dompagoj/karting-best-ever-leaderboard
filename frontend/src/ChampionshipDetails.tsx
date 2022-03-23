import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { getChampionship } from './http'
import { AddRace } from './Race'
import { Wrapper } from './styles/Race.style'

export const ChampionshipDetails = () => {
    const { id } = useParams()
    const { data, isLoading } = useQuery(['championship', id], ()=>getChampionship(id!))

    if (isLoading) return <h3>Loading...</h3>
    if (!data) return <h3>Championship with id {id} not found</h3>

    return (
        <Wrapper>
            <div key={id}>{data?.name} </div>
            <AddRace/>
        </Wrapper>  
    )
}
