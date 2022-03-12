import { useQuery } from 'react-query'
import { getChampionships } from './http'
import { RaceForm } from './Race'


export const App =() =>{
    const {data, isLoading} = useQuery('championships', getChampionships)

    if (isLoading) return <h3>Loading...</h3>
    console.log(data)

    return (
        <div>
            <ul>
                {data?.map((championship,index) => <li key={index}>{championship.name}</li>)}
            </ul>
            <RaceForm/>
        </div>
    )
}
