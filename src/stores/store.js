import {map, atom} from 'nanostores'

// export const store = map({})

export const series = atom([1, 5, 9])

export function setCurrentCluster() {
    series.set([1,2,3])
}

// export async function fetchYearData(year) {
//     const response = await fetch(`https://harikar-reports-api.cyclic.app/v2/dashboard/${year}`)
//     if (!response.ok) {
//         console.log(response.statues)
//     } else {
//     const data = await response.json()
//     store.set(data)
//     }
// }