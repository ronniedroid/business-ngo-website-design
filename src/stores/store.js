import {map, atom} from 'nanostores'

export const store = map({})

export const currentMonth = map({})

export const currentCluster = atom({})

export function setCurrentMonth(month) {
    currentMonth.set({...store.get()[month], name: month, ...store.get().months})
    currentCluster.set({...currentMonth.get().general, name: "general"})
}

export function setCurrentCluster(cluster) {
    currentCluster.set({...currentMonth.get()[cluster], name: cluster})
}

export async function fetchYearData(year) {
    const url = `http://localhost:8000/v2/dashboard/${year}`
    const response = await fetch(url)
    if (!response.ok) {
        console.log(response.statues)
    } else {
    const data = await response.json()
    store.set(data)
    currentMonth.set({...store.get().year, name: "year", ...store.get().months})
    currentCluster.set({...currentMonth.get().general, name: "general"})
    }
}