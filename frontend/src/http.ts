import { Championships, Drivers } from './Data'

export async function getChampionships() {
    return Championships
}
// export function mapExample(id:string){
//     const a = Championships.map((championship)=>{
//         return championship.name+'asd'
//     })
//     const b = map(Championships, (championship)=>{
//         return championship.name+'asd'
//     })
//     console.log(a)
//     console.log(b)
// }

export async function getChampionship(id:string) {
    return Championships.find((c)=>{
        return c.id === parseInt(id)
    })
}


export async function getDriver() {
    return Drivers
}

// function map(arr: any[], cb) {
//     const init:any[] = []
//     for(let i=0; i<arr.length; i++){
//         const elem = arr[i]
//         const result = cb(elem)
//         init.push(result)
//     }
//     return init
// }
