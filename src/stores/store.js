import {map, atom} from 'nanostores'

export const store = map({})

export const currentMonth = map({})

export const currentCluster = atom({})

export const months = atom([])

function clusterSelected(list, name) {
    const clusters = list.map((i) => i.abbr)
    const clusterExists = clusters.includes(name)
    return clusterExists ? name : "general"
}

export function setCurrentMonth(month) {
    currentMonth.set({...store.get()[month], name: month})
    const cluster = currentCluster.get().name
    currentCluster.set({...currentMonth.get()[cluster], name: clusterSelected(currentMonth.get().clusters, currentCluster.get().name)})
}

export function setCurrentCluster(cluster) {
    currentCluster.set({...currentMonth.get()[cluster], name: cluster})
}

export async function fetchYearData(year) {
    const url = `https://harikar-reports-api.cyclic.app/v2/dashboard/${year}`
    const response = await fetch(url)
    if (!response.ok) {
        console.log(response.statues)
    } else {
    const data = await response.json()
    store.set(data)
    months.set([...data.months])
    currentMonth.set({...data.year, name: "year"})
    currentCluster.set({...currentMonth.get().general, name: "general"})
    }
}