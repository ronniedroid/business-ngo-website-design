import {map} from 'nanostores'

export const store = map({})

export const currentCluster = map({})

export function setCurrentCluster(cluster) {
    currentCluster.set({...store.get()[cluster], name: cluster})
}

export async function fetchYearData(year) {
    const response = await fetch(`https://harikar-reports-api.cyclic.app/v2/dashboard/${year}`)
    if (!response.ok) {
        console.log(response.statues)
    } else {
    const data = await response.json()
    store.set(data)
    currentCluster.set({...store.get().general, name: 'general'})
    }
}