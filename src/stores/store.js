import {atom} from 'nanostores'

export const dataSeries = atom([14, 50, 70])

export function update() {
    dataSeries.set([Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)])
}